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

function stillLive(): boolean {
  if (!featuredEvent.href) return false // the manual off switch
  const deadline = new Date(featuredEvent.hideAfter).getTime()
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
