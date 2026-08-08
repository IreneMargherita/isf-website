import SectionHeader from '../ui/SectionHeader'
import { home } from '../../data/content'
import { accentAt } from '../../lib/accents'

function RhythmIcon({ name }: { name: string }) {
  const common = {
    width: 30,
    height: 30,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true as const,
  }
  switch (name) {
    case 'home':
      return (
        <svg {...common}>
          <path d="M3 11.5 12 4l9 7.5" />
          <path d="M5 10v9h14v-9" />
          <path d="M9 19v-5h6v5" />
        </svg>
      )
    case 'game':
      return (
        <svg {...common}>
          <path d="M7 8h10a4 4 0 0 1 4 4v1a3 3 0 0 1-5.2 2H8.2A3 3 0 0 1 3 13v-1a4 4 0 0 1 4-4Z" />
          <path d="M7 11v2M6 12h2M15 11h.01M17 13h.01" />
        </svg>
      )
    case 'globe':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M3.5 12h17M12 3.5c2.5 2.3 2.5 14.7 0 17M12 3.5c-2.5 2.3-2.5 14.7 0 17" />
        </svg>
      )
    case 'wave':
      return (
        <svg {...common}>
          <path d="M3 16c1.5 0 1.5-1.5 3-1.5S7.5 16 9 16s1.5-1.5 3-1.5S13.5 16 15 16s1.5-1.5 3-1.5S19.5 16 21 16" />
          <path d="M3 20c1.5 0 1.5-1.5 3-1.5S7.5 20 9 20s1.5-1.5 3-1.5S13.5 20 15 20s1.5-1.5 3-1.5S19.5 20 21 20" />
          <path d="M12 11a4 4 0 0 0-4-4" />
        </svg>
      )
    default:
      return null
  }
}

export default function WeeklyRhythm() {
  const { weeklyRhythm } = home
  return (
    <section className="container-ministry py-16 sm:py-20">
      <SectionHeader
        eyebrow={weeklyRhythm.eyebrow}
        title={weeklyRhythm.title}
        description={weeklyRhythm.description}
        tone="teal"
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {weeklyRhythm.items.map((item, i) => {
          const accent = accentAt(i * 2 + 1)
          return (
            <article
              key={item.title}
              className="group relative flex flex-col gap-4 overflow-hidden rounded-ministry bg-white p-6 pt-7 shadow-ministry ring-1 ring-ink-900/5 transition-all duration-200 hover:-translate-y-1.5 hover:shadow-ministry-lg"
            >
              {/* colour bar identifies the card at a glance */}
              <span aria-hidden="true" className={`absolute inset-x-0 top-0 h-1.5 ${accent.solid}`} />
              <span
                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${accent.tile} transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110`}
              >
                <RhythmIcon name={item.icon} />
              </span>
              <h3 className="text-xl font-bold text-ink-900">{item.title}</h3>
              <p className="leading-relaxed text-ink-600">{item.text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
