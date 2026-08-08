import PageHero from '../components/ui/PageHero'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import StaticForm from '../components/ui/StaticForm'
import { connection } from '../data/content'
import { accentAt } from '../lib/accents'

function ChannelIcon({ name }: { name: string }) {
  const common = {
    width: 24,
    height: 24,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.7,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true as const,
  }
  if (name === 'phone') {
    return (
      <svg {...common}>
        <rect x="6" y="2.5" width="12" height="19" rx="2.5" />
        <path d="M10.5 18.5h3" />
      </svg>
    )
  }
  if (name === 'whatsapp') {
    return (
      <svg {...common}>
        <path d="M20.5 11.6a8.4 8.4 0 0 1-12.2 7.5L3.5 20.5l1.5-4.7A8.4 8.4 0 1 1 20.5 11.6Z" />
        <path d="M8.8 8.6c.4 1.9 2.9 4.4 4.8 4.8" />
      </svg>
    )
  }
  return (
    <svg {...common}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="3.8" />
      <circle cx="16.9" cy="7.1" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  )
}

export default function Connection() {
  return (
    <>
      <PageHero
        tone="teal"
        eyebrow={connection.hero.eyebrow}
        title={connection.hero.title}
        description={connection.hero.subtitle}
      />

      {/* The three real contact channels, straight from the postcard. */}
      <section className="container-ministry py-16 sm:py-20">
        <div className="mx-auto flex max-w-3xl flex-col gap-5 text-center">
          {connection.intro.map((p, i) => (
            <p key={i} className="text-lg leading-relaxed text-ink-600">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {connection.channels.map((ch, i) => {
            const accent = accentAt(i * 3 + 4)
            return (
            <Card key={ch.title} hover className="relative flex flex-col gap-4 overflow-hidden">
              <span aria-hidden="true" className={`absolute inset-x-0 top-0 h-1.5 ${accent.solid}`} />
              <span className={`flex h-14 w-14 items-center justify-center rounded-2xl ${accent.tile}`}>
                <ChannelIcon name={ch.icon} />
              </span>
              <div>
                <h2 className="text-xl font-bold text-ink-900">{ch.title}</h2>
                <p className="mt-1 leading-relaxed text-ink-600">{ch.text}</p>
              </div>
              <ul className="mt-auto flex flex-col gap-2 pt-1">
                {ch.items.map((item) => (
                  <li key={item.value}>
                    <a
                      href={item.href}
                      className="link-ministry inline-flex flex-wrap items-baseline gap-x-2 no-underline hover:underline"
                      {...(item.href.startsWith('http')
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                    >
                      <span className="text-xs font-semibold uppercase tracking-wider text-ink-400">
                        {item.label}
                      </span>
                      <span className="font-medium">{item.value}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </Card>
            )
          })}
        </div>
      </section>

      <section className="bg-paper-100">
        <div className="container-ministry py-16 sm:py-20">
          <div className="mx-auto grid max-w-xl gap-6">
            {connection.paths.map((p, i) => (
              <Card key={p.audience} hover className="flex flex-col gap-3 bg-white">
                <span className={`ministry-tag w-fit ${accentAt(i * 4).chip}`}>{p.audience}</span>
                <h2 className="text-xl font-bold text-ink-900">{p.title}</h2>
                <p className="flex-1 leading-relaxed text-ink-600">{p.text}</p>
                <div>
                  <Button href={p.cta.href}>{p.cta.label}</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container-ministry py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="flex flex-col gap-4">
            <span className="ministry-tag w-fit bg-sun-50 text-sun-800">Good to know</span>
            <h2 className="text-3xl font-extrabold sm:text-[2.6rem]">{connection.rides.title}</h2>
            <p className="text-lg leading-relaxed text-ink-600">{connection.rides.body}</p>

            <div className="mt-2 grid gap-4">
              {connection.interests.map((it) => (
                <div key={it.title} className="rounded-2xl bg-paper-100 p-6 ring-1 ring-ink-900/5">
                  <h3 className="text-lg font-bold text-ink-900">{it.title}</h3>
                  <p className="mt-1 leading-relaxed text-ink-600">{it.text}</p>
                </div>
              ))}
            </div>
          </div>

          <StaticForm
            title={connection.form.title}
            note={connection.form.note}
            fields={connection.form.fields}
            submitLabel={connection.form.submitLabel}
          />
        </div>
      </section>
    </>
  )
}
