import PageHero from '../components/ui/PageHero'
import Card from '../components/ui/Card'
import CallToAction from '../components/sections/CallToAction'
import { about } from '../data/content'

export default function About() {
  return (
    <>
      <PageHero eyebrow={about.hero.eyebrow} title={about.hero.title} description={about.hero.subtitle} />

      <section className="container-ministry py-16 sm:py-20">
        <div className="mx-auto flex max-w-3xl flex-col gap-5">
          {about.intro.map((p, i) => (
            <p key={i} className="text-lg leading-relaxed text-ink-600">
              {p}
            </p>
          ))}
        </div>
      </section>

      <section className="bg-cream-100/70">
        <div className="container-ministry py-16 sm:py-20">
          <div className="mx-auto flex max-w-3xl flex-col gap-5">
            <h2 className="text-3xl font-semibold sm:text-4xl">{about.whyStudentsMatter.title}</h2>
            {about.whyStudentsMatter.body.map((p, i) => (
              <p key={i} className="text-lg leading-relaxed text-ink-600">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="container-ministry py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="ministry-tag bg-ruby-50 text-ruby-700">Our approach</span>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">{about.approach.title}</h2>
          <div className="mx-auto mt-5 flex max-w-2xl flex-col gap-4">
            {about.approach.body.map((p, i) => (
              <p key={i} className="text-lg leading-relaxed text-ink-600">
                {p}
              </p>
            ))}
          </div>
        </div>
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {about.approach.steps.map((step, i) => (
            <li key={step.title}>
              <Card className="flex h-full flex-col gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ruby-600 font-display text-lg font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="text-lg font-semibold text-ink-900">{step.title}</h3>
                <p className="leading-relaxed text-ink-600">{step.text}</p>
              </Card>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-cream-100/70">
        <div className="container-ministry grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-semibold sm:text-4xl">{about.hospitality.title}</h2>
            {about.hospitality.body.map((p, i) => (
              <p key={i} className="text-lg leading-relaxed text-ink-600">
                {p}
              </p>
            ))}
          </div>
          <Card className="bg-white p-8 lg:p-10">
            <p className="font-display text-2xl leading-relaxed text-ink-800 sm:text-3xl">
              &ldquo;A shared table is the shortest distance between strangers and friends.&rdquo;
            </p>
            <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-ruby-600">
              The heart of ISF
            </p>
          </Card>
        </div>
      </section>

      <section className="container-ministry py-16 sm:py-20">
        <div className="mx-auto flex max-w-3xl flex-col gap-5">
          <h2 className="text-3xl font-semibold sm:text-4xl">{about.csulb.title}</h2>
          {about.csulb.body.map((p, i) => (
            <p key={i} className="text-lg leading-relaxed text-ink-600">
              {p}
            </p>
          ))}
        </div>
      </section>

      <section className="bg-ocean-900 text-white">
        <div className="container-ministry py-16 text-center sm:py-20">
          <div className="mx-auto flex max-w-3xl flex-col gap-5">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">{about.pledge.title}</h2>
            {about.pledge.body.map((p, i) => (
              <p key={i} className="text-lg leading-relaxed text-ocean-100/90">
                {p}
              </p>
            ))}
            <p className="mx-auto mt-4 max-w-2xl border-t border-white/20 pt-6 font-display text-xl text-ocean-50 sm:text-2xl">
              {about.pledge.line}
            </p>
          </div>
        </div>
      </section>

      <CallToAction
        title="Come and see for yourself"
        description="The best way to understand ISF is to eat dinner with us. Turn up, bring a friend, and see for yourself."
        primaryCta={{ label: 'See upcoming events', to: '/gallery' }}
        secondaryCta={{ label: 'Meet the team', to: '/leadership' }}
      />
    </>
  )
}
