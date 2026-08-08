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
  try {
    // Two students submitting at the same instant would otherwise be able
    // to write to the same row. Waiting for the lock avoids that.
    lock.waitLock(20000)

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
    try { lock.releaseLock() } catch (ignore) {}
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
