import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

type Variant = 'primary' | 'secondary'

interface ButtonProps {
  children: ReactNode
  variant?: Variant
  /** Internal route — renders a React Router <Link> */
  to?: string
  /** External or mailto link — renders an <a> */
  href?: string
  /** Native button type when no `to`/`href` is provided */
  type?: 'button' | 'submit'
  onClick?: () => void
  className?: string
  ariaLabel?: string
}

const variantClass: Record<Variant, string> = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
}

export default function Button({
  children,
  variant = 'primary',
  to,
  href,
  type = 'button',
  onClick,
  className = '',
  ariaLabel,
}: ButtonProps) {
  const classes = `${variantClass[variant]} ${className}`.trim()

  if (to) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    )
  }

  if (href) {
    const isExternal = href.startsWith('http')
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes} aria-label={ariaLabel}>
      {children}
    </button>
  )
}
