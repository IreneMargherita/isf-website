import type { ReactNode } from 'react'
import MinistryTag from './MinistryTag'

interface PageHeroProps {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  children?: ReactNode
}

export default function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-ministry-radial">
      <div className="container-ministry py-16 sm:py-20 lg:py-24">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
          {eyebrow && <MinistryTag>{eyebrow}</MinistryTag>}
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">{title}</h1>
          {description && (
            <p className="text-lg leading-relaxed text-ink-600 sm:text-xl">{description}</p>
          )}
          {children}
          <div className="mt-2 flex w-full flex-col items-center gap-2" aria-hidden="true">
            <span className="font-display text-lg text-ruby-300">&#9670;</span>
            <span className="section-divider" />
          </div>
        </div>
      </div>
    </section>
  )
}
