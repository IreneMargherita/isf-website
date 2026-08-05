import { Link } from 'react-router-dom'
import PageHero from '../components/ui/PageHero'
import Card from '../components/ui/Card'
import { ArrowIcon } from '../components/ui/icons'
import { resources } from '../data/content'

function ResourceLink({ label, href }: { label: string; href: string }) {
  const isInternal = href.startsWith('/')
  const content = (
    <>
      <span className="text-ruby-400">
        <ArrowIcon />
      </span>
      <span>{label}</span>
    </>
  )
  if (isInternal) {
    return (
      <Link to={href} className="link-ministry inline-flex items-center gap-1.5 no-underline hover:underline">
        {content}
      </Link>
    )
  }
  const isExternal = href.startsWith('http')
  return (
    <a
      href={href}
      className="link-ministry inline-flex items-center gap-1.5 no-underline hover:underline"
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {content}
    </a>
  )
}

export default function Resources() {
  return (
    <>
      <PageHero
        eyebrow={resources.hero.eyebrow}
        title={resources.hero.title}
        description={resources.hero.subtitle}
      />

      <section className="container-ministry py-16 sm:py-20">
        <div className="mx-auto flex max-w-3xl flex-col gap-5 text-center">
          {resources.intro.map((p, i) => (
            <p key={i} className="text-lg leading-relaxed text-ink-600">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {resources.sections.map((sec) => (
            <Card key={sec.title} className="flex flex-col gap-4">
              <div>
                <h2 className="text-xl font-semibold text-ink-900">{sec.title}</h2>
                <p className="mt-1 leading-relaxed text-ink-600">{sec.text}</p>
              </div>
              <ul className="flex flex-col gap-2.5">
                {sec.links.map((link) => (
                  <li key={link.label} className="leading-snug">
                    <ResourceLink label={link.label} href={link.href} />
                    {link.note && !link.note.startsWith('TODO') && (
                      <span className="ml-1 text-xs text-ink-400">— {link.note}</span>
                    )}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-xl text-center text-lg text-ink-600">{resources.note}</p>
      </section>
    </>
  )
}
