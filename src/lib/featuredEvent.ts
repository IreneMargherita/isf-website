import { useEffect, useState } from 'react'
import { featuredEvent } from '../data/content'

/* ---------------------------------------------------------------------
 *  Is the featured event still worth showing?
 *
 *  WHY THIS IS DECIDED IN THE BROWSER
 *  ----------------------------------
 *  This site is static files on GitHub Pages. There is no server running
 *  anywhere that could check the time and send a different page, so the
 *  only clock available is the visitor's own. That is fine here: the worst
 *  case is a student whose laptop clock is wrong sees a dinner banner an
 *  hour late. It would NOT be fine for anything that matters, like hiding
 *  a price or gating access, because a visitor can set their clock to
 *  whatever they like. Never enforce a rule with a clock you don't own.
 *
 *  WHY WE STORE A ZONE NAME AND NOT AN OFFSET
 *  ------------------------------------------
 *  Carol says "PST" the way most Californians do, meaning "our local time".
 *  But PST is literally UTC-8, and California is only on it from November
 *  to March. From March to November it's on PDT, UTC-7. Hardcode -08:00
 *  for an August event and the banner hangs around an hour past when you
 *  wanted it gone.
 *
 *  So instead of an offset we store the ZONE ("America/Los_Angeles") and
 *  let the browser work out which offset applies on that specific date.
 *  Zone names carry the whole history of daylight saving; a fixed offset
 *  is only correct for half the year. Any time you find yourself typing a
 *  timezone offset by hand, reach for the zone name instead.
 *
 *  WHY AN INTERVAL AND NOT setTimeout
 *  ----------------------------------
 *  The obvious version is `setTimeout(hide, deadline - Date.now())`. That
 *  breaks silently for anything more than about 24.8 days away, because
 *  browsers store the delay in a signed 32-bit integer. Overflow it and
 *  the timer fires IMMEDIATELY instead of later, so a banner scheduled a
 *  month out would vanish the instant the page loaded. Checking the clock
 *  every half minute costs nothing and has no such cliff.
 * ------------------------------------------------------------------- */

const CHECK_EVERY_MS = 30_000

/**
 * How far a zone sits from UTC at one particular instant, in milliseconds.
 *
 * There is no direct API for this, so we use the standard trick: ask
 * Intl to print that instant as wall-clock numbers in the target zone,
 * reassemble those numbers as if they were UTC, and measure the gap.
 */
function zoneOffsetMs(utcMs: number, timeZone: string): number {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone,
    hour12: false,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).formatToParts(new Date(utcMs))

  const f = (type: string) => Number(parts.find((p) => p.type === type)?.value)
  // hour comes back as 24 rather than 0 at midnight in some engines
  return (
    Date.UTC(f('year'), f('month') - 1, f('day'), f('hour') % 24, f('minute'), f('second')) - utcMs
  )
}

/** Turn "2026-08-28T21:00" in a named zone into a real moment in time. */
export function zonedTimeToMs(wallClock: string, timeZone: string): number {
  const m = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})$/.exec(wallClock.trim())
  if (!m) return NaN
  const [, y, mo, d, h, mi] = m.map(Number)

  // Read the wall clock as if it were UTC, then slide it by the zone's offset.
  const asIfUtc = Date.UTC(y, mo - 1, d, h, mi)
  const first = asIfUtc - zoneOffsetMs(asIfUtc, timeZone)
  // Re-check once: the initial guess can land on the far side of a daylight
  // saving change, in which case the offset we used was the wrong one.
  const second = asIfUtc - zoneOffsetMs(first, timeZone)
  return second
}

function stillLive(): boolean {
  if (!featuredEvent.href) return false // the manual off switch
  const deadline = zonedTimeToMs(featuredEvent.hideAfter, featuredEvent.timeZone)
  if (Number.isNaN(deadline)) return false // a malformed date hides it rather than showing it forever
  return Date.now() < deadline
}

export function useFeaturedEvent() {
  const [live, setLive] = useState(stillLive)

  useEffect(() => {
    if (!live) return
    const id = window.setInterval(() => {
      if (!stillLive()) setLive(false)
    }, CHECK_EVERY_MS)
    return () => window.clearInterval(id)
  }, [live])

  return live ? featuredEvent : null
}
