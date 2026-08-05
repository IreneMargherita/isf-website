import PageHero from '../components/ui/PageHero'
import Card from '../components/ui/Card'
import CallToAction from '../components/sections/CallToAction'
import { leadership } from '../data/content'
import { asset } from '../lib/asset'

export default function Leadership() {
  return (
    <>
      <PageHero
        eyebrow={leadership.hero.eyebrow}
        title={leadership.hero.title}
        description={leadership.hero.subtitle}
      />

      <section className="container-ministry py-16 sm:py-20">
        <div className="mx-auto flex max-w-3xl flex-col gap-5 text-center">
          {leadership.intro.map((p, i) => (
            <p key={i} className="text-lg leading-relaxed text-ink-600">
              {p}
            </p>
          ))}
        </div>

        <p className="mx-auto mt-6 max-w-xl rounded-full bg-gold-50 px-5 py-2.5 text-center text-sm font-medium text-ink-600 ring-1 ring-gold-200">
          Full leader profiles are coming soon — names and photos below are placeholders.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {leadership.leaders.map((leader, i) => (
            <Card key={i} hover className="flex flex-col items-center gap-4 text-center">
              {leader.image ? (
                <img
                  src={asset(leader.image)}
                  alt={`Portrait of ${leader.name}`}
                  className="h-24 w-24 rounded-full object-cover ring-4 ring-cream-100"
                  width={96}
                  height={96}
                />
              ) : (
                <span
                  className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-ruby-100 to-cream-200 font-display text-3xl font-bold text-ruby-700 ring-4 ring-cream-100"
                  aria-hidden="true"
                >
                  {leader.initials}
                </span>
              )}
              <div>
                <h3 className="text-xl font-semibold text-ink-900">{leader.name}</h3>
                <p className="font-medium text-ruby-700">{leader.role}</p>
              </div>
              <span className="ministry-tag bg-ocean-50 text-ocean-700">{leader.focus}</span>
              <p className="leading-relaxed text-ink-600">{leader.bio}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-cream-100/70">
        <div className="container-ministry py-16 sm:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <span className="ministry-tag bg-ruby-50 text-ruby-700">It takes a village</span>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">The people who make ISF possible</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {leadership.groups.map((g) => (
              <Card key={g.title} className="flex flex-col gap-2 bg-white">
                <h3 className="text-lg font-semibold text-ink-900">{g.title}</h3>
                <p className="leading-relaxed text-ink-600">{g.text}</p>
              </Card>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-xl text-center text-lg text-ink-600">{leadership.note}</p>
        </div>
      </section>

      <CallToAction
        title="Could there be a place for you on the team?"
        description="Whether you can give an evening a week or an hour a month, your welcome makes a difference."
        primaryCta={{ label: 'Get involved', to: '/connection' }}
        secondaryCta={{ label: 'Support the ministry', to: '/give' }}
      />
    </>
  )
}
