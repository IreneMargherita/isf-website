import Hero from '../components/sections/Hero'
import EventAlert from '../components/sections/EventAlert'
import WeeklyRhythm from '../components/sections/WeeklyRhythm'
import PhotoStrip from '../components/sections/PhotoStrip'
import CallToAction from '../components/sections/CallToAction'
import SectionHeader from '../components/ui/SectionHeader'
import Card from '../components/ui/Card'
import { CheckIcon } from '../components/ui/icons'
import { home } from '../data/content'
import { accentAt } from '../lib/accents'

export default function Home() {
  const { whoWeAre, finalCta } = home

  return (
    <>
      <Hero />

      <EventAlert />

      <section className="container-ministry py-16 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <SectionHeader align="left" tone="grape" eyebrow={whoWeAre.eyebrow} title={whoWeAre.title} />
            {whoWeAre.body.map((p, i) => (
              <p key={i} className="text-lg leading-relaxed text-ink-600">
                {p}
              </p>
            ))}
          </div>
          <div className="grid gap-4">
            {whoWeAre.points.map((pt, i) => (
              <Card key={pt.title} hover className="flex items-start gap-4">
                <span className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${accentAt(i * 3 + 3).tile}`}>
                  <CheckIcon />
                </span>
                <div>
                  <h3 className="font-bold text-ink-900">{pt.title}</h3>
                  <p className="text-ink-600">{pt.text}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-b from-white via-paper-100 to-white">
        <WeeklyRhythm />
      </div>

      <PhotoStrip />

      <CallToAction
        title={finalCta.title}
        description={finalCta.description}
        primaryCta={finalCta.primaryCta}
        secondaryCta={finalCta.secondaryCta}
      />
    </>
  )
}
