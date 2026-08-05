import PageHero from '../components/ui/PageHero'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import StaticForm from '../components/ui/StaticForm'
import { connection, site } from '../data/content'

export default function Connection() {
  return (
    <>
      <PageHero
        eyebrow={connection.hero.eyebrow}
        title={connection.hero.title}
        description={connection.hero.subtitle}
      />

      <section className="container-ministry py-16 sm:py-20">
        <div className="mx-auto flex max-w-3xl flex-col gap-5 text-center">
          {connection.intro.map((p, i) => (
            <p key={i} className="text-lg leading-relaxed text-ink-600">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {connection.paths.map((p) => (
            <Card key={p.audience} hover className="flex flex-col gap-3">
              <span className="ministry-tag w-fit bg-ruby-50 text-ruby-700">{p.audience}</span>
              <h2 className="text-xl font-semibold text-ink-900">{p.title}</h2>
              <p className="flex-1 leading-relaxed text-ink-600">{p.text}</p>
              <div>
                <Button href={p.cta.href}>{p.cta.label}</Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-cream-100/70">
        <div className="container-ministry py-16 sm:py-20">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <span className="ministry-tag bg-sage-50 text-sage-600">Tell us what sounds good</span>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Save your spot</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {connection.interests.map((it) => (
              <Card key={it.title} className="flex flex-col gap-2 bg-white">
                <h3 className="text-xl font-semibold text-ink-900">{it.title}</h3>
                <p className="leading-relaxed text-ink-600">{it.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container-ministry py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="flex flex-col gap-4">
            <span className="ministry-tag w-fit bg-ocean-50 text-ocean-700">Reach out</span>
            <h2 className="text-3xl font-semibold sm:text-4xl">We would love to hear from you</h2>
            <p className="text-lg leading-relaxed text-ink-600">
              Prefer email? The buttons above reach us directly. Or send a quick note with the form — we
              read every message and will get back to you soon.
            </p>
            <div className="rounded-2xl bg-cream-100 p-6 ring-1 ring-ink-900/5">
              <p className="text-sm text-ink-500">Email us anytime</p>
              {/* TODO: replace with the real ministry email (set in src/data/content.ts). */}
              <a className="link-ministry text-lg" href={`mailto:${site.contactEmail}`}>
                {site.contactEmail}
              </a>
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
