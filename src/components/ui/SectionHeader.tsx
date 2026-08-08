import type { ReactNode } from 'react'
import MinistryTag, { type Tone } from './MinistryTag'

interface SectionHeaderProps {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  tone?: Tone
  as?: 'h2' | 'h3'
  className?: string
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  tone = 'coral',
  as: Heading = 'h2',
  className = '',
}: SectionHeaderProps) {
  const alignClasses =
    align === 'center'
      ? 'mx-auto max-w-2xl items-center text-center'
      : 'max-w-2xl items-start text-left'

  return (
    <div className={`flex flex-col gap-4 ${alignClasses} ${className}`.trim()}>
      {eyebrow && <MinistryTag tone={tone}>{eyebrow}</MinistryTag>}
      <Heading className="text-3xl font-black leading-[1.12] sm:text-[2.6rem]">{title}</Heading>
      {description && <p className="text-lg leading-relaxed text-ink-600">{description}</p>}
    </div>
  )
}
