import type { ReactNode } from 'react'
import MinistryTag, { type Tone } from './MinistryTag'

interface PageHeroProps {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  children?: ReactNode
  /** Each page picks its own accent so the site feels varied but ordered. */
  tone?: Tone
}

export default function PageHero({ eyebrow, title, description, children, tone = 'coral' }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-ministry-radial">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-confetti opacity-30" />
      <div className="container-ministry relative pb-12 pt-14 sm:pb-14 sm:pt-16 lg:pb-16 lg:pt-20">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
          {eyebrow && <MinistryTag tone={tone}>{eyebrow}</MinistryTag>}
          <h1 className="text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-[3.4rem]">{title}</h1>
          {description && (
            <p className="text-lg leading-relaxed text-ink-600 sm:text-xl">{description}</p>
          )}
          {children}
          <span className="section-divider mt-3" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
