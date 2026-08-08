import type { ReactNode } from 'react'
import { accentByName, type AccentName } from '../../lib/accents'

/** Any expressive accent, plus the functional brand blue. */
export type Tone = AccentName | 'brand' | 'ruby' | 'ocean' | 'gold' | 'sage'

/** Old tone names from the first version of the site still resolve. */
const legacy: Record<string, AccentName> = {
  ruby: 'coral',
  ocean: 'sky',
  gold: 'sun',
  sage: 'grass',
}

interface MinistryTagProps {
  children: ReactNode
  tone?: Tone
  className?: string
}

export default function MinistryTag({ children, tone = 'coral', className = '' }: MinistryTagProps) {
  if (tone === 'brand') {
    return (
      <span className={`ministry-tag bg-brand-50 text-brand-700 ${className}`.trim()}>{children}</span>
    )
  }
  const accent = accentByName(legacy[tone] ?? tone)
  return <span className={`ministry-tag ${accent.chip} ${className}`.trim()}>{children}</span>
}
