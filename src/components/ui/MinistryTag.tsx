import type { ReactNode } from 'react'

type Tone = 'ruby' | 'ocean' | 'gold' | 'sage'

const toneClass: Record<Tone, string> = {
  ruby: 'bg-ruby-50 text-ruby-700',
  ocean: 'bg-ocean-50 text-ocean-700',
  gold: 'bg-gold-50 text-gold-600',
  sage: 'bg-sage-50 text-sage-600',
}

interface MinistryTagProps {
  children: ReactNode
  tone?: Tone
  className?: string
}

export default function MinistryTag({ children, tone = 'ruby', className = '' }: MinistryTagProps) {
  return <span className={`ministry-tag ${toneClass[tone]} ${className}`.trim()}>{children}</span>
}
