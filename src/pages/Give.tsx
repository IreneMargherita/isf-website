import PageHero from '../components/ui/PageHero'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import CallToAction from '../components/sections/CallToAction'
import { CheckIcon } from '../components/ui/icons'
import { give } from '../data/content'

export default function Give() {
  return (
    <>
      <PageHero eyebrow={give.hero.eyebrow} title={give.hero.title} description={give.hero.subtitle} />

      <section className="container-ministry py-16 sm:py-20">
        <div className="mx-auto flex max-w-3xl flex-col gap-5 text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">{give.why.title}</h2>
          {give.why.body.map((p, i) => (
            <p key={i} className="text-lg leading-relaxed text-ink-600">
              {p}
            </p>
          ))}
        </div>
      </section>

      <section className="bg-cream-100/70">
        <div className="container-ministry py-16 sm:py-20">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <span className="ministry-tag bg-sage-50 text-sage-600">Your gift at work</span>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">What giving supports</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {give.supports.map((s) => (
              <Card key={s.title} className="flex items-start gap-4 bg-white">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ruby-50 text-ruby-600">
                  <CheckIcon />
                </span>
                <div>
                  <h3 className="font-semibold text-ink-900">{s.title}</h3>
                  <p className="text-ink-600">{s.text}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container-ministry py-16 sm:py-20">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <span className="ministry-tag bg-ruby-50 text-ruby-700">Ways to help</span>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Find your way to support ISF</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {give.ways.map((w) => (
            <Card key={w.title} hover className="flex flex-col gap-3">
              <h3 className="text-xl font-semibold text-ink-900">{w.title}</h3>
              <p className="flex-1 leading-relaxed text-ink-600">{w.text}</p>
              {w.cta && (
                <div>
                  <Button variant="secondary" to={w.cta.to} href={w.cta.href}>
                    {w.cta.label}
                  </Button>
                </div>
              )}
            </Card>
          ))}
        </div>
      </section>

      <section className="container-ministry pb-16 sm:pb-20">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-ruby-600 to-ruby-800 p-8 text-center text-white shadow-ministry-lg sm:p-12">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">{give.giving.title}</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-ruby-50/90">{give.giving.note}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {/* TODO: point primaryCta.href to your real donation link (church giving page, PayPal, Givebutter, Stripe...). */}
            <Button href={give.giving.primaryCta.href} className="bg-white text-ruby-700 hover:bg-cream-100">
              {give.giving.primaryCta.label}
            </Button>
            <Button
              href={give.giving.secondaryCta.href}
              variant="secondary"
              className="border-white/40 bg-transparent text-white hover:bg-white/10"
            >
              {give.giving.secondaryCta.label}
            </Button>
          </div>
        </div>
      </section>

      <CallToAction
        title="Not ready to give? Pray with us."
        description="Prayer is the foundation of everything we do. Lift up our students, volunteers, and the friendships God is building."
        primaryCta={{ label: 'Share a prayer request', to: '/prayer-request' }}
        secondaryCta={{ label: 'Volunteer instead', to: '/connection' }}
      />
    </>
  )
}
