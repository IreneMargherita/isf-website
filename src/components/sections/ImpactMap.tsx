import MinistryTag from '../ui/MinistryTag'
import { impactMap } from '../../data/content'

/**
 * ImpactMap — a responsive, stylized world-map illustration with pins for the
 * countries and regions ISF welcomes students from. India, China, Japan and
 * Europe are emphasized with larger ruby pins + labels. The map is decorative;
 * the accompanying tag list keeps the information accessible to all readers.
 */
export default function ImpactMap({ className = '' }: { className?: string }) {
  const { eyebrow, title, description, regions, note } = impactMap

  return (
    <div className={`grid items-center gap-10 lg:grid-cols-2 ${className}`.trim()}>
      <div className="flex flex-col gap-4">
        <MinistryTag tone="ocean">{eyebrow}</MinistryTag>
        <h2 className="text-3xl font-semibold sm:text-4xl">{title}</h2>
        <p className="text-lg leading-relaxed text-ink-600">{description}</p>
        <ul className="mt-2 flex flex-wrap gap-2" aria-label="Countries and regions represented at ISF">
          {regions.map((r) => (
            <li key={r.name}>
              <span
                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-medium ${
                  r.emphasis
                    ? 'bg-ruby-50 text-ruby-700 ring-1 ring-ruby-200'
                    : 'bg-white text-ink-600 ring-1 ring-ink-900/5'
                }`}
              >
                <span className={`h-2 w-2 rounded-full ${r.emphasis ? 'bg-ruby-500' : 'bg-ocean-400'}`} />
                {r.name}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <div className="relative aspect-[5/3] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-ocean-50 to-ocean-100 shadow-ministry ring-1 ring-ocean-200/60">
          <svg viewBox="0 0 100 60" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden="true">
            {/* faint graticule */}
            <g stroke="#9cc4e4" strokeWidth="0.15" opacity="0.5">
              <path d="M0 15 H100 M0 30 H100 M0 45 H100" />
              <path d="M25 0 V60 M50 0 V60 M75 0 V60" />
            </g>
            {/* abstract continents */}
            <g fill="#bcd8bf" opacity="0.95">
              <path d="M14 13 C20 9 27 13 24 21 C29 25 24 33 27 40 C23 47 15 45 15 37 C10 31 12 21 14 13 Z" />
              <path d="M44 13 C50 11 55 15 50 19 C55 22 47 26 45 21 C41 21 41 15 44 13 Z" />
              <path d="M46 24 C53 22 55 31 51 40 C49 47 43 45 44 38 C41 32 41 27 46 24 Z" />
              <path d="M57 11 C72 7 88 11 85 20 C91 25 81 31 73 28 C64 31 56 24 57 17 Z" />
              <path d="M64 27 C72 26 75 34 70 39 C65 42 60 37 63 30 Z" />
              <path d="M82 42 C89 40 93 47 86 51 C81 53 77 48 82 42 Z" />
            </g>
          </svg>

          {regions.map((r) => (
            <div
              key={r.name}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${r.x}%`, top: `${r.y}%` }}
            >
              {r.emphasis ? (
                <div className="relative flex flex-col items-center">
                  <span className="absolute -top-0.5 h-4 w-4 rounded-full bg-ruby-400/60 animate-pin-pulse" />
                  <span className="relative h-3.5 w-3.5 rounded-full bg-ruby-600 ring-2 ring-white" />
                  <span className="mt-1 whitespace-nowrap rounded-full bg-white/90 px-2 py-0.5 text-[0.68rem] font-semibold text-ruby-700 shadow-sm">
                    {r.name}
                  </span>
                </div>
              ) : (
                <span
                  className="block h-2.5 w-2.5 rounded-full bg-ocean-500 ring-2 ring-white"
                  title={r.name}
                />
              )}
            </div>
          ))}
        </div>
        <p className="mt-3 text-center text-xs text-ink-400">{note}</p>
      </div>
    </div>
  )
}
