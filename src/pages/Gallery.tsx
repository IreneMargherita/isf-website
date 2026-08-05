import PageHero from '../components/ui/PageHero'
import Card from '../components/ui/Card'
import CallToAction from '../components/sections/CallToAction'
import SectionHeader from '../components/ui/SectionHeader'
import { gallery } from '../data/content'

const toneGradient: Record<string, string> = {
  ruby: 'from-ruby-200 to-ruby-400',
  ocean: 'from-ocean-200 to-ocean-400',
  sage: 'from-sage-200 to-sage-400',
  gold: 'from-gold-200 to-gold-400',
}

function ImageIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <circle cx="8.5" cy="10" r="1.6" />
      <path d="m21 16-4.5-4.5L7 19" />
    </svg>
  )
}

function MetaRow({ icon, children }: { icon: 'date' | 'pin'; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-sm text-ink-500">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {icon === 'date' ? (
          <>
            <rect x="3" y="4.5" width="18" height="16" rx="2" />
            <path d="M3 9h18M8 2.5v4M16 2.5v4" />
          </>
        ) : (
          <>
            <path d="M12 21s-6.5-5.6-6.5-10.3A6.5 6.5 0 0 1 18.5 10.7C18.5 15.4 12 21 12 21Z" />
            <circle cx="12" cy="10.5" r="2.3" />
          </>
        )}
      </svg>
      {children}
    </span>
  )
}

export default function Gallery() {
  return (
    <>
      <PageHero
        eyebrow={gallery.hero.eyebrow}
        title={gallery.hero.title}
        description={gallery.hero.subtitle}
      />

      <section className="container-ministry py-16 sm:py-20">
        <div className="mx-auto mb-10 flex max-w-3xl flex-col gap-4 text-center">
          {gallery.intro.map((p, i) => (
            <p key={i} className="text-lg leading-relaxed text-ink-600">
              {p}
            </p>
          ))}
        </div>

        {/* Photo tiles — placeholders. Replace with real images: see README. */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.categories.map((cat) => (
            <div
              key={cat.title}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-ministry ring-1 ring-ink-900/5"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${toneGradient[cat.tone] ?? toneGradient.ruby}`} />
              <div className="absolute inset-0 flex items-center justify-center text-white/45">
                <ImageIcon />
              </div>
              <span className="absolute left-3 top-3 rounded-full bg-white/85 px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-ink-500">
                Photo placeholder
              </span>
              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-0.5 bg-gradient-to-t from-ink-900/70 to-transparent p-5">
                <h3 className="text-lg font-semibold text-white">{cat.title}</h3>
                <p className="text-sm text-white/85">{cat.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cream-100/70">
        <div className="container-ministry py-16 sm:py-20">
          <SectionHeader eyebrow="Save the date" title="Upcoming events" align="left" />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {gallery.upcoming.map((ev) => (
              <Card key={ev.title} hover className="flex flex-col gap-3 bg-white">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold text-ink-900">{ev.title}</h3>
                  <span className="shrink-0 rounded-full bg-ruby-50 px-3 py-1 text-xs font-semibold text-ruby-700">
                    {ev.tag}
                  </span>
                </div>
                <div className="flex flex-wrap gap-x-5 gap-y-1">
                  <MetaRow icon="date">{ev.date}</MetaRow>
                  <MetaRow icon="pin">{ev.location}</MetaRow>
                </div>
                <p className="leading-relaxed text-ink-600">{ev.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container-ministry py-16 sm:py-20">
        <SectionHeader eyebrow="Looking back" title="Past gatherings" align="left" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.past.map((ev) => (
            <Card key={ev.title} className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-ocean-600">{ev.date}</span>
              <h3 className="text-lg font-semibold text-ink-900">{ev.title}</h3>
              <p className="text-sm leading-relaxed text-ink-600">{ev.text}</p>
            </Card>
          ))}
        </div>
      </section>

      <CallToAction
        title={gallery.cta.title}
        description={gallery.cta.description}
        primaryCta={gallery.cta.primaryCta}
      />
    </>
  )
}
