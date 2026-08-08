import PageHero from '../components/ui/PageHero'
import Card from '../components/ui/Card'
import CallToAction from '../components/sections/CallToAction'
import SectionHeader from '../components/ui/SectionHeader'
import PhotoCollage from '../components/sections/PhotoCollage'
import { gallery } from '../data/content'
import { accentAt, accentByName } from '../lib/accents'

const toneGradient: Record<string, string> = {
  red: 'from-red-300 to-red-500',
  coral: 'from-coral-300 to-coral-500',
  sun: 'from-sun-300 to-sun-500',
  grass: 'from-grass-300 to-grass-500',
  teal: 'from-teal-300 to-teal-500',
  sky: 'from-sky-300 to-sky-500',
  indigo: 'from-indigo-300 to-indigo-500',
  grape: 'from-grape-300 to-grape-500',
  berry: 'from-berry-300 to-berry-500',
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
        tone="sun"
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
          <p className="text-sm font-semibold text-ink-400">Click any photo to see it bigger.</p>
        </div>

        <PhotoCollage />
      </section>

      <section className="bg-cream-100/70">
        <div className="container-ministry py-16 sm:py-20">
          <SectionHeader eyebrow="Save the date" title="Upcoming events" align="left" />

          <ul className="mt-8 flex flex-col gap-2.5">
            {gallery.eventNotes.map((note, i) => (
              <li key={note} className="flex items-start gap-2.5 leading-relaxed text-ink-600">
                <span
                  className="mt-2 h-2 w-2 shrink-0 rounded-full"
                  style={{ backgroundColor: accentByName(['sun', 'grass', 'sky'][i % 3]).hex }}
                  aria-hidden="true"
                />
                <span>{note}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {gallery.upcoming.map((ev, i) => {
              const accent = accentAt(i * 2)
              return (
              <Card key={ev.title} hover className="relative flex flex-col gap-3 overflow-hidden bg-white">
                <span aria-hidden="true" className={`absolute inset-y-0 left-0 w-1.5 ${accent.solid}`} />
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-bold text-ink-900">{ev.title}</h3>
                  <span className={`shrink-0 rounded-full px-3 py-1 text-xs font-bold ${accent.chip}`}>
                    {ev.tag}
                  </span>
                </div>
                <div className="flex flex-wrap gap-x-5 gap-y-1">
                  <MetaRow icon="date">{ev.date}</MetaRow>
                  <MetaRow icon="pin">{ev.location}</MetaRow>
                </div>
                <p className="leading-relaxed text-ink-600">{ev.text}</p>
              </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="container-ministry py-16 sm:py-20">
        <SectionHeader eyebrow="Looking back" title="Past gatherings" align="left" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.past.map((ev, i) => (
            <Card key={ev.title} className="flex flex-col gap-2">
              <span className={`text-xs font-bold uppercase tracking-wider ${accentAt(i * 3 + 1).text}`}>{ev.date}</span>
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
