/* =====================================================================
 *  ISF STUDENT QUESTIONNAIRE  ->  GOOGLE SHEET
 * ---------------------------------------------------------------------
 *  This script turns your "Fall 2026" spreadsheet into the place the
 *  website form submits to. Nothing else is involved: no third-party
 *  service, no monthly fee, and the data never leaves your Google
 *  account.
 *
 *  ONE-TIME SETUP (about three minutes)
 *  ------------------------------------
 *   1. Open the spreadsheet:
 *      https://docs.google.com/spreadsheets/d/1bMHS06zbZd3GxHkZennBJ4V4X7h4XoVtchAuTbjc_go/edit
 *   2. Menu: Extensions -> Apps Script. A code editor opens in a new tab.
 *   3. Delete whatever is in the editor and paste this whole file in.
 *   4. Click the Save icon.
 *   5. In the function dropdown at the top, choose  setUpSheet  and click
 *      Run. Google will ask you to authorise it: choose your account,
 *      click "Advanced", then "Go to (project name) (unsafe)", then
 *      Allow. That warning is Google telling you the script is not
 *      published in their marketplace, which it isn't, because you just
 *      wrote it. Your spreadsheet now has its column headers.
 *   6. Click Deploy -> New deployment.
 *        - Click the gear next to "Select type" and choose Web app
 *        - Description:      ISF questionnaire
 *        - Execute as:       Me
 *        - Who has access:   Anyone            <-- this matters
 *      Click Deploy, authorise again if asked, then COPY THE WEB APP URL.
 *      It looks like:
 *        https://script.google.com/macros/s/AKfy..../exec
 *   7. Send Claude that URL, or paste it yourself into
 *      `src/data/content.ts` as `connection.form.endpoint`.
 *
 *  "Who has access: Anyone" sounds alarming but is correct here. It means
 *  anyone can POST a form submission, exactly like any public contact
 *  form. It does NOT give anyone the ability to read your spreadsheet.
 *
 *  IF YOU EVER CHANGE THE FORM
 *  ---------------------------
 *  Add the new field's name to HEADERS below, in the position you want
 *  the column, then run setUpSheet again. Existing rows keep their data.
 *  After ANY edit to this file you must Deploy -> Manage deployments ->
 *  pencil icon -> Version: New version -> Deploy, or the live site will
 *  keep using the old code.
 * ===================================================================== */

/** Column order in the sheet. The keys the website sends are on the right. */
var HEADERS = [
  ['Submitted',                'timestamp'],
  ['First name',               'firstName'],
  ['Family name',              'familyName'],
  ['Gender',                   'gender'],
  ['Home country',             'homeCountry'],
  ['Email',                    'email'],
  ['Phone',                    'phone'],
  ['Year at CSULB',            'yearAtCsulb'],
  ['Exchange student',         'exchangeStudent'],
  ['Major / Department',       'major'],
  ['Planned graduation',       'graduation'],
  ['Religious belief',         'religion'],
  ['Belief (other)',           'religionOther'],
  ['Open to 30 min dialogue',  'openToDialogue'],
  ['Museum visit',             'interestMuseum'],
  ['Day hike',                 'interestHike'],
  ['Yosemite & homestay',      'interestYosemite'],
  ['Visit American church',    'interestChurch'],
  ['Bible discussion',         'interestBible'],
  ['Anything else',            'message'],
]

var SHEET_NAME = 'Sheet1'

function sheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet()
  return ss.getSheetByName(SHEET_NAME) || ss.getSheets()[0]
}

/**
 * Run this once from the editor. Writes the header row, makes it bold,
 * freezes it so it stays visible while you scroll, and widens the columns.
 * Safe to run again later: it only rewrites row 1.
 */
function setUpSheet() {
  var sh = sheet_()
  var titles = HEADERS.map(function (h) { return h[0] })

  sh.getRange(1, 1, 1, titles.length).setValues([titles])
  sh.getRange(1, 1, 1, titles.length)
    .setFontWeight('bold')
    .setBackground('#2b58ab')      // ISF brand blue
    .setFontColor('#ffffff')
    .setVerticalAlignment('middle')
  sh.setFrozenRows(1)
  sh.setRowHeight(1, 34)

  for (var c = 1; c <= titles.length; c++) sh.autoResizeColumn(c)

  SpreadsheetApp.getActiveSpreadsheet().toast(
    'Headers are set. Now do Deploy > New deployment > Web app.',
    'ISF form ready',
    8
  )
}

/**
 * Try to get the write lock, giving up and trying again a few times
 * instead of failing after a single wait.
 *
 * WHY A RETRY LOOP AND NOT JUST ONE LONGER WAIT
 * --------------------------------------------
 * Appending a row is really two steps: find the last row, then write to
 * the one below it. If two submissions do that at the same instant they
 * can both pick the same row and one student's answers get written over.
 * The lock is the single key to the room: only the holder may write.
 *
 * `waitLock(ms)` throws if the key doesn't come free in time. One long
 * wait and three shorter ones add up to the same patience, but the loop
 * behaves better under a real rush, for two reasons:
 *
 *  - Between attempts we let go completely and sleep. That gives the
 *    queue a moment to actually drain instead of everyone pressing
 *    against the door at once.
 *  - The sleep is randomised (that's the "jitter"). If 100 phones all
 *    scanned the QR code in the same second and every one of them
 *    retried after exactly 500ms, they would collide again, and again,
 *    in lockstep. Spreading the retries out over a random window breaks
 *    that rhythm. This is a standard pattern called exponential backoff
 *    with jitter, and you'll meet it again with API rate limits, database
 *    connections and AWS SDK calls. Same idea every time.
 *
 * Worst case here is about 32 seconds of waiting, well inside both the
 * Apps Script execution limit and a student's patience.
 */
function acquireLock_(lock) {
  var WAITS = [10000, 10000, 10000] // three attempts, 10s each

  for (var i = 0; i < WAITS.length; i++) {
    try {
      lock.waitLock(WAITS[i])
      return true // got the key
    } catch (err) {
      // Last attempt failed, so stop pretending and report it.
      if (i === WAITS.length - 1) return false

      // Back off a little longer each round, plus a random slice so that
      // simultaneous submitters don't all wake up together.
      var backoff = 400 * (i + 1) + Math.floor(Math.random() * 600)
      console.warn('Lock busy, retrying in ' + backoff + 'ms (attempt ' + (i + 1) + ')')
      Utilities.sleep(backoff)
    }
  }
  return false
}

/**
 * Receives a submission from the website and appends one row.
 *
 * The site sends a normal HTML form post, so the values arrive in
 * e.parameter. We read them by name rather than by position, which means
 * the form and this script can't silently drift out of alignment: a field
 * the script doesn't know about is ignored, and a field the form stops
 * sending just leaves an empty cell.
 */
function doPost(e) {
  var lock = LockService.getScriptLock()
  var held = false
  try {
    // Two students submitting at the same instant would otherwise be able
    // to write to the same row. Waiting for the lock avoids that.
    held = acquireLock_(lock)
    if (!held) {
      // We never got the key, so we never touched the sheet. Nothing is
      // half-written. Log the whole submission so the answers exist
      // somewhere you can recover them from the execution log.
      console.error('Could not acquire lock after 3 attempts. Payload: ' +
        JSON.stringify((e && e.parameter) || {}))
      return reply_('error: busy')
    }

    var sh = sheet_()
    if (sh.getLastRow() === 0) setUpSheet()

    var p = (e && e.parameter) || {}
    var row = HEADERS.map(function (h) {
      var key = h[1]
      if (key === 'timestamp') {
        return Utilities.formatDate(new Date(), 'America/Los_Angeles', 'yyyy-MM-dd HH:mm:ss')
      }
      var v = p[key]
      return v === undefined || v === null ? '' : String(v)
    })

    sh.appendRow(row)
    return reply_('ok')
  } catch (err) {
    // Land the error somewhere you can actually find it later.
    console.error(err)
    return reply_('error: ' + err)
  } finally {
    // Release ONLY if we actually hold it. `finally` always runs, even
    // when the code above threw, which is exactly why the lock lives
    // here: if a crash could skip the release, the door would stay
    // locked forever and every student after this one would be stuck.
    // (Python gives you `with` statements to do this same job for you.)
    if (held) {
      try { lock.releaseLock() } catch (ignore) {}
    }
  }
}

/** Visiting the URL in a browser should say something friendly, not error. */
function doGet() {
  return HtmlService.createHtmlOutput(
    '<p style="font:16px system-ui;padding:24px">ISF questionnaire endpoint is live. ' +
    'Submissions from the website land in the Fall 2026 spreadsheet.</p>'
  )
}

function reply_(text) {
  return HtmlService.createHtmlOutput('<p>' + text + '</p>')
}
