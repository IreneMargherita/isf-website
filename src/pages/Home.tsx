import Hero from '../components/sections/Hero'
import WeeklyRhythm from '../components/sections/WeeklyRhythm'
import ImpactMap from '../components/sections/ImpactMap'
import PhotoStrip from '../components/sections/PhotoStrip'
import CallToAction from '../components/sections/CallToAction'
import SectionHeader from '../components/ui/SectionHeader'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import { CheckIcon } from '../components/ui/icons'
import { home } from '../data/content'
import { accentAt } from '../lib/accents'

export default function Home() {
  const { whoWeAre, missionPreview, studentInvite, finalCta } = home
  const invites = [studentInvite]

  return (
    <>
      <Hero />

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

      <section className="relative overflow-hidden bg-gradient-to-br from-brand-800 via-brand-700 to-indigo-800 text-white">
        <div className="container-ministry grid items-center gap-8 py-16 sm:py-20 lg:grid-cols-[1.4fr_1fr]">
          <div className="flex flex-col gap-4">
            <span className="ministry-tag w-fit bg-white/15 text-sun-200">{missionPreview.eyebrow}</span>
            <h2 className="text-3xl font-extrabold text-white sm:text-[2.6rem]">{missionPreview.title}</h2>
            <p className="text-lg leading-relaxed text-white/85">{missionPreview.body}</p>
          </div>
          <div className="lg:justify-self-end">
            <Button to={missionPreview.cta.to} className="!bg-white !text-brand-700 hover:!bg-sun-300 hover:!text-ink-900">
              {missionPreview.cta.label}
            </Button>
          </div>
        </div>
      </section>

      <section className="container-ministry py-16 sm:py-20">
        <ImpactMap />
      </section>

      <section className="container-ministry">
        <div className="mx-auto grid max-w-2xl gap-6">
          {invites.map((inv, idx) => {
            const accent = accentAt(idx === 0 ? 4 : 8)
            return (
            <Card key={inv.title} hover className="relative flex flex-col gap-4 overflow-hidden p-8">
              <span aria-hidden="true" className={`absolute inset-x-0 top-0 h-1.5 ${accent.solid}`} />
              <span className={`ministry-tag w-fit ${accent.chip}`}>{inv.eyebrow}</span>
              <h3 className="text-2xl font-bold">{inv.title}</h3>
              <p className="leading-relaxed text-ink-600">{inv.body}</p>
              <ul className="flex flex-col gap-2.5">
                {inv.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-ink-700">
                    <span className={`mt-1 ${accent.text}`}>
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
            )
          })}
        </div>
      </section>

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
