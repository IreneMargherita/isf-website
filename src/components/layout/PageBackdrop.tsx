import { useLocation } from 'react-router-dom'
import { asset } from '../../lib/asset'

/* ---------------------------------------------------------------------
 *  PageBackdrop — the Walter Pyramid, very faintly, behind Home and About.
 *
 *  Three things keep it from getting in the way of reading:
 *
 *   1. The image file itself is already desaturated and lightened, so the
 *      browser isn't running an expensive filter on every paint.
 *   2. It sits at ~7% opacity with a mask that fades it out toward the
 *      bottom, so body copy further down the page sits on clean paper.
 *   3. It's `fixed`, so it stays put while the page scrolls. That reads as
 *      depth rather than as a picture you're trying to look at.
 *
 *  It lives behind everything except the page background colour, so any
 *  section with its own fill (white cards, the dark blue bands) simply
 *  covers it. The pyramid shows through in the open, neutral stretches.
 * ------------------------------------------------------------------- */

const SHOW_ON = ['/', '/about']

export default function PageBackdrop() {
  const { pathname } = useLocation()
  if (!SHOW_ON.includes(pathname)) return null

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 select-none overflow-hidden"
    >
      <picture>
        <source srcSet={asset('csulb-pyramid.webp')} type="image/webp" />
        <img
          src={asset('csulb-pyramid.jpg')}
          alt=""
          className="h-full w-full object-cover object-[38%_45%] opacity-[0.07]"
          style={{
            WebkitMaskImage: 'linear-gradient(to bottom, #000 0%, #000 30%, transparent 78%)',
            maskImage: 'linear-gradient(to bottom, #000 0%, #000 30%, transparent 78%)',
          }}
        />
      </picture>
      {/* a wash of brand blue over the top ties the photo to the palette */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-100/25 via-transparent to-paper-50/60" />
    </div>
  )
}
