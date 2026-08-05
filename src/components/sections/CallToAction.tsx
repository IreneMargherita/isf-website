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
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-ruby-600 to-ruby-800 px-6 py-14 text-center shadow-ministry-lg sm:px-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle at center, white 1px, transparent 1.4px)',
            backgroundSize: '22px 22px',
          }}
        />
        <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-5">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
          {description && <p className="text-lg leading-relaxed text-ruby-50/90">{description}</p>}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Button
              to={primaryCta.to}
              href={primaryCta.href}
              className="bg-white text-ruby-700 hover:bg-cream-100"
            >
              {primaryCta.label}
            </Button>
            {secondaryCta && (
              <Button
                variant="secondary"
                to={secondaryCta.to}
                href={secondaryCta.href}
                className="border-white/40 bg-transparent text-white hover:bg-white/10"
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
