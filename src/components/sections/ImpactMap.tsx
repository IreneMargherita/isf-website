import MinistryTag from '../ui/MinistryTag'
import { impactMap, LONG_BEACH } from '../../data/content'
import { accentAt } from '../../lib/accents'
import { MAP, LAND_PATH, BORDERS_PATH, project } from '../../lib/worldPath'

/* ---------------------------------------------------------------------
 *  ImpactMap — a real world map with travel arcs converging on Long Beach.
 *
 *  Two things are worth knowing if you ever edit this:
 *
 *  1. THE PROJECTION IS PLAIN EQUIRECTANGULAR, so a country's pin is just
 *     arithmetic on its latitude/longitude (see lib/worldPath.ts). To add
 *     a country, add its coordinates to `impactMap.origins` in content.ts.
 *     Nothing here needs to change.
 *
 *  2. ARCS FROM ASIA CROSS THE PACIFIC, which on a flat map means running
 *     off the right edge and back in on the left. We handle that by
 *     picking whichever target longitude is closer (Long Beach at -118°,
 *     or the same point at +242°) and then drawing each arc three times,
 *     shifted by -360°, 0° and +360°. The viewBox clips the copies that
 *     fall outside, so the arc appears to wrap. Same trick the landmass
 *     geometry uses.
 * ------------------------------------------------------------------- */

const DEST = project(LONG_BEACH.lon, LONG_BEACH.lat)

/** A gently lifted quadratic curve from an origin to Long Beach. */
function arcPath(lon: number, lat: number, shift: number) {
  // take the short way round the globe
  const target = Math.abs(lon - LONG_BEACH.lon) <= 180 ? LONG_BEACH.lon : LONG_BEACH.lon + 360
  const from = project(lon + shift, lat)
  const to = project(target + shift, LONG_BEACH.lat)
  const dx = to.x - from.x
  const dy = to.y - from.y
  const dist = Math.hypot(dx, dy)
  // control point pulled north, so every journey bows over the top
  const cx = (from.x + to.x) / 2
  const cy = (from.y + to.y) / 2 - Math.min(dist * 0.34, 120)
  return `M${from.x.toFixed(1)} ${from.y.toFixed(1)} Q${cx.toFixed(1)} ${cy.toFixed(1)} ${to.x.toFixed(1)} ${to.y.toFixed(1)}`
}

export default function ImpactMap({ className = '' }: { className?: string }) {
  const { eyebrow, title, description, origins, note } = impactMap
  const featured = origins.filter((o) => o.emphasis)

  return (
    <div className={`flex flex-col gap-8 ${className}`.trim()}>
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
        <MinistryTag tone="sky">{eyebrow}</MinistryTag>
        <h2 className="text-3xl font-extrabold sm:text-[2.6rem]">{title}</h2>
        <p className="text-lg leading-relaxed text-ink-600">{description}</p>
      </div>

      <div className="relative overflow-hidden rounded-blob bg-gradient-to-br from-brand-900 via-brand-800 to-indigo-900 p-2 shadow-ministry-lg sm:p-3">
        <svg
          viewBox={`0 0 ${MAP.W} ${MAP.H}`}
          className="h-auto w-full"
          role="img"
          aria-label={`World map showing students travelling to Long Beach, California from ${origins.length} countries.`}
        >
          <defs>
            <linearGradient id="isf-ocean" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#21365d" />
              <stop offset="100%" stopColor="#223d70" />
            </linearGradient>
            <linearGradient id="isf-land" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3a6fc9" stopOpacity="0.55" />
              <stop offset="55%" stopColor="#5289dc" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#7472c5" stopOpacity="0.5" />
            </linearGradient>
            <radialGradient id="isf-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fdbc20" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#fdbc20" stopOpacity="0" />
            </radialGradient>
          </defs>

          <rect width={MAP.W} height={MAP.H} rx="18" fill="url(#isf-ocean)" />

          {/* graticule */}
          <g stroke="#ffffff" strokeWidth="0.4" opacity="0.07">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <line key={`h${i}`} x1="0" x2={MAP.W} y1={(MAP.H / 6) * i} y2={(MAP.H / 6) * i} />
            ))}
            {Array.from({ length: 11 }, (_, i) => (
              <line key={`v${i}`} y1="0" y2={MAP.H} x1={(MAP.W / 12) * (i + 1)} x2={(MAP.W / 12) * (i + 1)} />
            ))}
          </g>

          <path d={LAND_PATH} fill="url(#isf-land)" />
          <path d={BORDERS_PATH} fill="none" stroke="#bcd4f5" strokeWidth="0.45" opacity="0.35" />

          {/* warm glow behind the destination */}
          <circle cx={DEST.x} cy={DEST.y} r="70" fill="url(#isf-glow)" />

          {/* ---- travel arcs ---- */}
          <g fill="none" strokeLinecap="round">
            {origins.map((o, i) => {
              const accent = accentAt(i)
              return [-360, 0, 360].map((shift) => (
                <path
                  key={`${o.name}-${shift}`}
                  d={arcPath(o.lon, o.lat, shift)}
                  stroke={accent.hex}
                  strokeWidth={o.emphasis ? 1.6 : 0.7}
                  opacity={o.emphasis ? 0.9 : 0.28}
                  strokeDasharray={o.emphasis ? '5 7' : '3 6'}
                  style={{
                    animation: `isf-dash ${o.emphasis ? 3.2 : 5}s linear infinite`,
                    animationDelay: `${(i % 9) * -0.45}s`,
                  }}
                />
              ))
            })}
          </g>

          {/* ---- origin pins ---- */}
          <g>
            {origins.map((o, i) => {
              const accent = accentAt(i)
              const p = project(o.lon, o.lat)
              return (
                <g key={o.name}>
                  {o.emphasis && (
                    <circle cx={p.x} cy={p.y} r="4" fill={accent.hex} opacity="0.35">
                      <animate attributeName="r" values="4;13;13" dur="2.6s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.45;0;0" dur="2.6s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
                    </circle>
                  )}
                  <circle
                    cx={p.x}
                    cy={p.y}
                    r={o.emphasis ? 4.6 : 2.8}
                    fill={accent.hex}
                    stroke="#ffffff"
                    strokeWidth={o.emphasis ? 1.6 : 1}
                  />
                  <title>{o.name}</title>
                </g>
              )
            })}
          </g>

          {/* ---- destination: Long Beach ---- */}
          <g>
            <circle cx={DEST.x} cy={DEST.y} r="7" fill="#fdbc20" opacity="0.5">
              <animate attributeName="r" values="7;26;26" dur="3s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.5;0;0" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx={DEST.x} cy={DEST.y} r="8.5" fill="#fdbc20" stroke="#ffffff" strokeWidth="2.4" />
            <text
              x={DEST.x}
              y={DEST.y + 26}
              textAnchor="middle"
              fill="#ffffff"
              fontSize="13"
              fontWeight="800"
              style={{ paintOrder: 'stroke', stroke: '#21365d', strokeWidth: 4, strokeLinejoin: 'round' }}
            >
              Long Beach, CA
            </text>
          </g>

          {/* labels for the biggest origins, drawn last so nothing covers them */}
          <g>
            {featured.map((o) => {
              const p = project(o.lon, o.lat)
              // Western Europe and East Asia are crowded, so each label can
              // be nudged from content.ts. Then clamp so nothing runs off
              // the edge of the frame.
              const half = o.name.length * 3.2
              const x = Math.min(MAP.W - half - 6, Math.max(half + 6, p.x + (o.labelDx ?? 0)))
              const y = p.y - 11 + (o.labelDy ?? 0)
              return (
                <text
                  key={`label-${o.name}`}
                  x={x}
                  y={y}
                  textAnchor="middle"
                  fill="#ffffff"
                  fontSize="11.5"
                  fontWeight="700"
                  style={{ paintOrder: 'stroke', stroke: '#21365d', strokeWidth: 3.5, strokeLinejoin: 'round' }}
                >
                  {o.name}
                </text>
              )
            })}
          </g>
        </svg>

        {/* The animation lives here rather than in Tailwind because it is
            only ever used by this one component. */}
        <style>{`
          @keyframes isf-dash { to { stroke-dashoffset: -120; } }
          @media (prefers-reduced-motion: reduce) {
            svg path[style*="isf-dash"] { animation: none !important; }
          }
        `}</style>
      </div>

      {/* The pin list carries the same information for anyone who cannot
          see the map, and doubles as a nice colourful legend. */}
      <ul className="flex flex-wrap justify-center gap-2" aria-label="Countries represented at ISF">
        {origins.map((o, i) => {
          const accent = accentAt(i)
          return (
            <li key={o.name}>
              <span
                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-semibold ring-1 ${
                  o.emphasis ? `${accent.chip} ${accent.ring}` : 'bg-white text-ink-600 ring-ink-900/5'
                }`}
              >
                <span className={`h-2.5 w-2.5 rounded-full ${accent.solid}`} aria-hidden="true" />
                {o.name}
              </span>
            </li>
          )
        })}
      </ul>

      <p className="text-center text-sm text-ink-400">{note}</p>
    </div>
  )
}
