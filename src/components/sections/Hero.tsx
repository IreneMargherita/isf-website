import Button from '../ui/Button'
import MinistryTag from '../ui/MinistryTag'
import { home } from '../../data/content'
import { asset } from '../../lib/asset'

const tagPosition = ['-left-3 top-10', '-right-3 top-20', 'left-2 bottom-12', '-right-2 bottom-24']

export default function Hero() {
  const { hero } = home

  return (
    <section className="relative overflow-hidden bg-ministry-radial">
      <div aria-hidden="true" className="pointer-events-none absolute -left-24 top-8 h-72 w-72 rounded-full bg-ocean-100/50 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-ruby-100/50 blur-3xl" />

      <div className="container-ministry grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:py-28">
        <div className="flex animate-fade-up flex-col items-start gap-6">
          <MinistryTag>{hero.eyebrow}</MinistryTag>
          <h1 className="text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-[3.7rem]">
            {hero.title}
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-ink-600 sm:text-xl">{hero.subtitle}</p>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Button to={hero.primaryCta.to}>
              {hero.primaryCta.label}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Button>
            <Button variant="secondary" to={hero.secondaryCta.to}>
              {hero.secondaryCta.label}
            </Button>
          </div>

          <dl className="mt-4 grid w-full max-w-md grid-cols-3 gap-4">
            {hero.stats.map((s) => (
              <div key={s.label} className="rounded-2xl bg-white/70 p-4 text-center ring-1 ring-ink-900/5">
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="block font-display text-2xl font-bold text-ruby-700">{s.value}</span>
                  <span className="mt-1 block text-xs leading-snug text-ink-500">{s.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative mx-auto aspect-square w-full max-w-[26rem]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cream-100 to-cream-200 shadow-ministry-lg" />
            <div className="absolute inset-6 rounded-full bg-white/60 ring-1 ring-ink-900/5" />
            <img
              src={asset('isf-logo.svg')}
              alt="International Student Fellowship logo — a globe reading ISF encircled by people of many nations"
              className="absolute inset-0 m-auto h-3/4 w-3/4 animate-float"
              width={320}
              height={320}
            />
            {hero.floatingTags.map((tag, i) => (
              <span
                key={tag}
                className={`absolute ${tagPosition[i % tagPosition.length]} rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-ink-700 shadow-ministry ring-1 ring-ink-900/5`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
