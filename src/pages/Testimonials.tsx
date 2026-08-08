import PageHero from '../components/ui/PageHero'
import Card from '../components/ui/Card'
import CallToAction from '../components/sections/CallToAction'
import { testimonials } from '../data/content'
import { accentAt } from '../lib/accents'

export default function Testimonials() {
  return (
    <>
      <PageHero
        tone="berry"
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
            <Card key={i} hover className="relative flex flex-col gap-4 overflow-hidden">
              <span aria-hidden="true" className={`absolute inset-x-0 top-0 h-1.5 ${accentAt(i).solid}`} />
              <span className={`font-display text-6xl leading-none opacity-40 ${accentAt(i).text}`} aria-hidden="true">
                &ldquo;
              </span>
              <p className="-mt-6 text-lg leading-relaxed text-ink-700">{s.quote}</p>
              <div className="mt-auto border-t border-ink-100 pt-4">
                <p className="font-semibold text-ink-900">{s.name}</p>
                <p className="text-sm text-ink-500">{s.context}</p>
                <span className="mt-2 inline-block rounded-full bg-paper-200 px-2.5 py-0.5 text-xs font-medium text-ink-500">
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
        description="Come share a meal and make a friend. There is a seat for you at the table."
        primaryCta={{ label: 'Come say hello', to: '/connection' }}
      />
    </>
  )
}
