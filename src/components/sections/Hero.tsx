import Button from '../ui/Button'
import MinistryTag from '../ui/MinistryTag'
import WelcomeMarquee from './WelcomeMarquee'
import { home } from '../../data/content'
import { accentAt } from '../../lib/accents'
import { asset } from '../../lib/asset'

/* The four floating pills that orbit the logo. Positions are tuned for
   the circular plate behind the mark; they hide on small screens where
   there isn't room for them to breathe. */
const tagPosition = [
  '-left-4 top-8',
  '-right-4 top-24',
  'left-0 bottom-16',
  '-right-2 bottom-4',
]

export default function Hero() {
  const { hero } = home

  return (
    <section className="relative overflow-hidden bg-ministry-radial">
      {/* Decorative wash + confetti, echoing the coloured heads in the logo ring */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-confetti opacity-20 sm:opacity-[0.32]" />
      <div aria-hidden="true" className="pointer-events-none absolute -left-28 top-4 h-80 w-80 rounded-full bg-sky-200/40 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-berry-200/35 blur-3xl" />

      <div className="container-ministry relative grid items-center gap-12 py-14 sm:py-18 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div className="flex animate-fade-up flex-col items-start gap-6">
          <MinistryTag tone="grass">{hero.eyebrow}</MinistryTag>

          <h1 className="max-w-[15ch] text-[2.15rem] font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.7rem]">
            <span className="text-teal-700">Free Food,</span>{' '}
            <span className="text-coral-600">Fun Hangouts,</span>{' '}
            <span className="text-ink-900">and Friends Who</span>{' '}
            <span className="relative inline-block whitespace-nowrap">
              <span className="relative z-10 text-grape-700">Stick Around</span>
              {/* highlighter swipe, like somebody marked up the sentence */}
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0.5 z-0 h-2.5 -rotate-1 rounded-full bg-sun-300/75 sm:bottom-1 sm:h-4"
              />
            </span>
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-ink-600 sm:text-xl">{hero.subtitle}</p>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Button to={hero.primaryCta.to}>
              {hero.primaryCta.label}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Button>
            <Button variant="secondary" to={hero.secondaryCta.to}>
              {hero.secondaryCta.label}
            </Button>
          </div>

          <dl className="mt-3 grid w-full max-w-lg grid-cols-3 gap-3 sm:gap-4">
            {hero.stats.map((s, i) => {
              const accent = accentAt(i * 3 + 1)
              return (
                <div
                  key={s.label}
                  className={`rounded-2xl bg-white/85 p-4 text-center shadow-sm ring-2 ${accent.ring} backdrop-blur`}
                >
                  <dt className="sr-only">{s.label}</dt>
                  <dd>
                    <span className={`block font-display text-2xl font-extrabold ${accent.text}`}>
                      {s.value}
                    </span>
                    <span className="mt-1 block text-xs font-medium leading-snug text-ink-500">
                      {s.label}
                    </span>
                  </dd>
                </div>
              )
            })}
          </dl>
        </div>

        {/* ---- Logo plate ---- */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative mx-auto aspect-square w-full max-w-[27rem]">
            {/* rotating dashed ring, very slow */}
            <div
              aria-hidden="true"
              className="absolute inset-2 animate-spin-slow rounded-full border-[3px] border-dashed border-brand-200/70"
            />
            <div aria-hidden="true" className="absolute inset-6 rounded-full bg-gradient-to-br from-white to-paper-200 shadow-ministry-lg" />
            <div aria-hidden="true" className="absolute inset-10 rounded-full bg-white/70 ring-1 ring-ink-900/5" />

            <img
              src={asset('isf-logo.png')}
              alt="International Student Fellowship logo. A blue globe reading ISF, encircled by people of many nations holding hands."
              className="absolute inset-0 m-auto h-[74%] w-[74%] animate-float object-contain drop-shadow-lg"
              width={512}
              height={512}
              fetchPriority="high"
            />

            {hero.floatingTags.map((tag, i) => {
              const accent = accentAt(i * 2)
              return (
                <span
                  key={tag}
                  className={`absolute hidden sm:inline-flex ${tagPosition[i % tagPosition.length]} rounded-full bg-white px-3.5 py-2 text-xs font-bold shadow-pop ${accent.text}`}
                >
                  {tag}
                </span>
              )
            })}
          </div>
        </div>
      </div>

      {/* ---- The multilingual welcome, straight off the ISF banner ---- */}
      <div className="relative border-y border-ink-900/5 bg-white/70 py-4 backdrop-blur sm:py-5">
        <WelcomeMarquee />
      </div>
    </section>
  )
}
