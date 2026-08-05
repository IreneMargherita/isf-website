import PageHero from '../components/ui/PageHero'
import Card from '../components/ui/Card'
import MinistryTag from '../components/ui/MinistryTag'
import CallToAction from '../components/sections/CallToAction'
import { curriculum } from '../data/content'

const tones = ['ruby', 'ocean', 'sage', 'gold'] as const

export default function Curriculum() {
  return (
    <>
      <PageHero
        eyebrow={curriculum.hero.eyebrow}
        title={curriculum.hero.title}
        description={curriculum.hero.subtitle}
      />

      <section className="container-ministry py-16 sm:py-20">
        <div className="mx-auto flex max-w-3xl flex-col gap-5 text-center">
          {curriculum.intro.map((p, i) => (
            <p key={i} className="text-lg leading-relaxed text-ink-600">
              {p}
            </p>
          ))}
        </div>

        <div className="mx-auto mt-8 max-w-2xl rounded-2xl bg-sage-50 px-6 py-4 text-center font-medium text-sage-600 ring-1 ring-sage-200">
          {curriculum.note}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {curriculum.tracks.map((t, i) => (
            <Card key={t.title} hover className="flex flex-col gap-3">
              <MinistryTag tone={tones[i % tones.length]}>{t.tag}</MinistryTag>
              <h3 className="text-xl font-semibold text-ink-900">{t.title}</h3>
              <p className="leading-relaxed text-ink-600">{t.text}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-cream-100/70">
        <div className="container-ministry py-16 sm:py-20">
          <div className="mx-auto flex max-w-3xl flex-col gap-5">
            <h2 className="text-3xl font-semibold sm:text-4xl">{curriculum.approach.title}</h2>
            {curriculum.approach.body.map((p, i) => (
              <p key={i} className="text-lg leading-relaxed text-ink-600">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <CallToAction
        title="Curious to keep the conversation going?"
        description="Pull up a chair. Ask anything. Explore at your own pace — there is always a place for you here."
        primaryCta={{ label: 'Get Connected', to: '/connection' }}
        secondaryCta={{ label: 'See our events', to: '/gallery' }}
      />
    </>
  )
}
