import PageHero from '../components/ui/PageHero'
import Button from '../components/ui/Button'
import StaticForm from '../components/ui/StaticForm'
import { prayer } from '../data/content'

export default function PrayerRequest() {
  return (
    <>
      <PageHero
        eyebrow={prayer.hero.eyebrow}
        title={prayer.hero.title}
        description={prayer.hero.subtitle}
      />

      <section className="container-ministry py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="flex flex-col gap-5">
            {prayer.intro.map((p, i) => (
              <p key={i} className="text-lg leading-relaxed text-ink-600">
                {p}
              </p>
            ))}

            <div className="rounded-2xl bg-ocean-50 p-6 ring-1 ring-ocean-100">
              <h2 className="font-semibold text-ink-900">A note on privacy</h2>
              <p className="mt-2 leading-relaxed text-ink-600">{prayer.privacyNote}</p>
            </div>

            <div>
              <Button variant="secondary" href={prayer.emailCta.href}>
                {prayer.emailCta.label}
              </Button>
            </div>
          </div>

          <StaticForm
            title={prayer.form.title}
            note={prayer.form.note}
            fields={prayer.form.fields}
            submitLabel={prayer.form.submitLabel}
          />
        </div>
      </section>

      <section className="bg-cream-100/70">
        <div className="container-ministry py-14 text-center">
          <p className="mx-auto max-w-2xl font-display text-2xl leading-relaxed text-ink-800 sm:text-3xl">
            &ldquo;Cast all your anxiety on Him, because He cares for you.&rdquo;
          </p>
          <p className="mt-3 text-sm font-semibold uppercase tracking-wider text-ruby-600">1 Peter 5:7</p>
        </div>
      </section>
    </>
  )
}
