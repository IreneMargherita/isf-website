import SectionHeader from '../ui/SectionHeader'
import Button from '../ui/Button'
import { testimonials } from '../../data/content'
import { accentAt } from '../../lib/accents'

export default function TestimonialPreview() {
  const stories = testimonials.stories.slice(0, 3)
  return (
    <section className="bg-paper-100">
      <div className="container-ministry py-16 sm:py-20">
        <SectionHeader
          eyebrow="Student stories"
          title="A welcome they remember"
          description="Friendship leaves a mark. Here is a taste of what students find at ISF."
          tone="berry"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {stories.map((s, i) => {
            const accent = accentAt(i * 4 + 2)
            return (
              <figure
                key={i}
                className="relative flex flex-col gap-4 overflow-hidden rounded-ministry bg-white p-7 shadow-ministry ring-1 ring-ink-900/5 transition-all duration-200 hover:-translate-y-1.5 hover:shadow-ministry-lg"
              >
                <span aria-hidden="true" className={`absolute inset-y-0 left-0 w-1.5 ${accent.solid}`} />
                <span
                  className={`font-display text-6xl leading-none ${accent.text} opacity-40`}
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <blockquote className="-mt-6 text-lg leading-relaxed text-ink-700">{s.quote}</blockquote>
                <figcaption className="mt-auto pt-2">
                  <p className="font-bold text-ink-900">{s.name}</p>
                  <p className="text-sm text-ink-500">{s.context}</p>
                </figcaption>
              </figure>
            )
          })}
        </div>
        <div className="mt-10 text-center">
          <Button variant="secondary" to="/testimonials">
            Read more stories
          </Button>
        </div>
      </div>
    </section>
  )
}
