import Button from '../ui/Button'
import type { Cta } from '../../data/content'

interface CallToActionProps {
  title: string
  description?: string
  primaryCta: Cta
  secondaryCta?: Cta
}

export default function CallToAction({ title, description, primaryCta, secondaryCta }: CallToActionProps) {
  return (
    <section className="container-ministry py-16 sm:py-20">
      <div className="relative overflow-hidden rounded-blob bg-gradient-to-br from-brand-600 via-indigo-600 to-grape-600 px-6 py-16 text-center shadow-ministry-lg sm:px-12">
        {/* confetti dots + soft blooms so the band feels celebratory */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-25"
          style={{
            backgroundImage: 'radial-gradient(circle at center, white 1.5px, transparent 2px)',
            backgroundSize: '26px 26px',
          }}
        />
        <div aria-hidden="true" className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-sun-400/25 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-20 -right-10 h-64 w-64 rounded-full bg-berry-400/25 blur-3xl" />

        <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-5">
          <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-[2.6rem]">{title}</h2>
          {description && <p className="text-lg leading-relaxed text-white/85">{description}</p>}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Button
              to={primaryCta.to}
              href={primaryCta.href}
              className="!bg-white !text-brand-700 hover:!bg-sun-300 hover:!text-ink-900"
            >
              {primaryCta.label}
            </Button>
            {secondaryCta && (
              <Button
                variant="secondary"
                to={secondaryCta.to}
                href={secondaryCta.href}
                className="!border-white/50 !bg-transparent !text-white hover:!border-white hover:!bg-white/15"
              >
                {secondaryCta.label}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
