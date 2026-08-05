import type { ElementType, ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  as?: ElementType
}

export default function Card({ children, className = '', hover = false, as: Tag = 'div' }: CardProps) {
  return (
    <Tag className={`card-ministry ${hover ? 'card-ministry-hover' : ''} ${className}`.trim()}>
      {children}
    </Tag>
  )
}
