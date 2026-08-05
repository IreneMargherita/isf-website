import Hero from '../components/sections/Hero'
import WeeklyRhythm from '../components/sections/WeeklyRhythm'
import ImpactMap from '../components/sections/ImpactMap'
import TestimonialPreview from '../components/sections/TestimonialPreview'
import CallToAction from '../components/sections/CallToAction'
import SectionHeader from '../components/ui/SectionHeader'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import { CheckIcon } from '../components/ui/icons'
import { home } from '../data/content'

export default function Home() {
  const { whoWeAre, missionPreview, studentInvite, volunteerInvite, finalCta } = home
  const invites = [studentInvite, volunteerInvite]

  return (
    <>
      <Hero />

      <section className="container-ministry py-16 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <SectionHeader align="left" eyebrow={whoWeAre.eyebrow} title={whoWeAre.title} />
            {whoWeAre.body.map((p, i) => (
              <p key={i} className="text-lg leading-relaxed text-ink-600">
                {p}
              </p>
            ))}
          </div>
          <div className="grid gap-4">
            {whoWeAre.points.map((pt) => (
              <Card key={pt.title} className="flex items-start gap-4">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ruby-50 text-ruby-600">
                  <CheckIcon />
                </span>
                <div>
                  <h3 className="font-semibold text-ink-900">{pt.title}</h3>
                  <p className="text-ink-600">{pt.text}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <WeeklyRhythm />

      <section className="bg-ocean-900 text-white">
        <div className="container-ministry grid items-center gap-8 py-16 sm:py-20 lg:grid-cols-[1.4fr_1fr]">
          <div className="flex flex-col gap-4">
            <span className="ministry-tag w-fit bg-white/10 text-ocean-100">{missionPreview.eyebrow}</span>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">{missionPreview.title}</h2>
            <p className="text-lg leading-relaxed text-ocean-100/90">{missionPreview.body}</p>
          </div>
          <div className="lg:justify-self-end">
            <Button to={missionPreview.cta.to} className="bg-white text-ocean-800 hover:bg-cream-100">
              {missionPreview.cta.label}
            </Button>
          </div>
        </div>
      </section>

      <section className="container-ministry py-16 sm:py-20">
        <ImpactMap />
      </section>

      <section className="container-ministry">
        <div className="grid gap-6 lg:grid-cols-2">
          {invites.map((inv) => (
            <Card key={inv.title} className="flex flex-col gap-4 p-8">
              <span className="ministry-tag w-fit bg-ruby-50 text-ruby-700">{inv.eyebrow}</span>
              <h3 className="text-2xl font-semibold">{inv.title}</h3>
              <p className="leading-relaxed text-ink-600">{inv.body}</p>
              <ul className="flex flex-col gap-2.5">
                {inv.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-ink-700">
                    <span className="mt-1 text-ruby-500">
                      <CheckIcon />
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-2">
                <Button to={inv.cta.to}>{inv.cta.label}</Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <TestimonialPreview />

      <CallToAction
        title={finalCta.title}
        description={finalCta.description}
        primaryCta={finalCta.primaryCta}
        secondaryCta={finalCta.secondaryCta}
      />
    </>
  )
}
