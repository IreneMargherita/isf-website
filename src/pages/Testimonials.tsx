import PageHero from '../components/ui/PageHero'
import Card from '../components/ui/Card'
import CallToAction from '../components/sections/CallToAction'
import { testimonials } from '../data/content'

export default function Testimonials() {
  return (
    <>
      <PageHero
        eyebrow={testimonials.hero.eyebrow}
        title={testimonials.hero.title}
        description={testimonials.hero.subtitle}
      />

      <section className="container-ministry py-16 sm:py-20">
        <div className="mx-auto flex max-w-3xl flex-col gap-5 text-center">
          {testimonials.intro.map((p, i) => (
            <p key={i} className="text-lg leading-relaxed text-ink-600">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.stories.map((s, i) => (
            <Card key={i} hover className="flex flex-col gap-4">
              <span className="font-display text-5xl leading-none text-ruby-300" aria-hidden="true">
                &ldquo;
              </span>
              <p className="-mt-4 text-lg leading-relaxed text-ink-700">{s.quote}</p>
              <div className="mt-auto border-t border-ink-100 pt-4">
                <p className="font-semibold text-ink-900">{s.name}</p>
                <p className="text-sm text-ink-500">{s.context}</p>
                <span className="mt-2 inline-block rounded-full bg-cream-100 px-2.5 py-0.5 text-xs font-medium text-ink-400">
                  {s.country}
                </span>
              </div>
            </Card>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-xl text-center text-lg text-ink-600">{testimonials.note}</p>
      </section>

      <CallToAction
        title="Your story could be next"
        description="Come share a meal and make a friend. We would love to welcome you into the ISF family."
        primaryCta={{ label: 'Get Connected', to: '/connection' }}
      />
    </>
  )
}
