import SectionHeader from '../ui/SectionHeader'
import Card from '../ui/Card'
import Button from '../ui/Button'
import { testimonials } from '../../data/content'

export default function TestimonialPreview() {
  const stories = testimonials.stories.slice(0, 3)
  return (
    <section className="bg-cream-100/70">
      <div className="container-ministry py-16 sm:py-20">
        <SectionHeader
          eyebrow="Student stories"
          title="A welcome they remember"
          description="Friendship leaves a mark. Here is a taste of what students experience at ISF."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {stories.map((s, i) => (
            <Card key={i} hover className="flex flex-col gap-4">
              <span className="font-display text-5xl leading-none text-ruby-300" aria-hidden="true">
                &ldquo;
              </span>
              <p className="-mt-4 text-lg leading-relaxed text-ink-700">{s.quote}</p>
              <div className="mt-auto pt-2">
                <p className="font-semibold text-ink-900">{s.name}</p>
                <p className="text-sm text-ink-500">{s.context}</p>
              </div>
            </Card>
          ))}
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
