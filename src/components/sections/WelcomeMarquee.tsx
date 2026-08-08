import { WELCOME_WORDS, accentAt } from '../../lib/accents'

/* ---------------------------------------------------------------------
 *  WelcomeMarquee — the "Welcome" banner artwork, rebuilt as live text.
 *
 *  Two rows drift in opposite directions. Each row renders the word list
 *  TWICE and slides exactly -50%, so the moment the first copy scrolls
 *  out the second is perfectly in its place — the loop is seamless with
 *  no JavaScript running per frame.
 *
 *  Accessibility notes:
 *   - The whole strip is aria-hidden and the meaning is carried by a
 *     visually-hidden sentence, so a screen reader hears one clean line
 *     instead of "Welcome" twenty-six times.
 *   - Each word carries its own `lang` so browsers pick a font that can
 *     actually render the script.
 *   - Motion stops entirely under `prefers-reduced-motion` (handled
 *     globally in index.css).
 * ------------------------------------------------------------------- */

function Row({ reverse = false, offset = 0 }: { reverse?: boolean; offset?: number }) {
  const words = reverse ? [...WELCOME_WORDS].reverse() : WELCOME_WORDS
  return (
    <div className="marquee-mask overflow-hidden py-1 pause-on-hover">
      <div
        className={`flex w-max gap-8 whitespace-nowrap sm:gap-12 ${
          reverse ? 'animate-marquee-reverse' : 'animate-marquee'
        }`}
      >
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 gap-8 sm:gap-12" aria-hidden="true">
            {words.map((w, i) => {
              const accent = accentAt(i + offset)
              return (
                <span
                  key={`${copy}-${w.lang}`}
                  lang={w.lang}
                  dir={w.rtl ? 'rtl' : undefined}
                  title={w.label}
                  className={`font-display text-2xl font-bold leading-[1.5] sm:text-3xl lg:text-4xl ${accent.text}`}
                >
                  {w.text}
                </span>
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function WelcomeMarquee({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-col gap-3 py-2 ${className}`.trim()}>
      <span className="sr-only">
        Welcome, in {WELCOME_WORDS.length} of the languages spoken by students at ISF.
      </span>
      <Row />
      <Row reverse offset={4} />
    </div>
  )
}
