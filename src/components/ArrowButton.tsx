import type { ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

type Props = {
  to: string
  children: ReactNode
  variant?: 'dark' | 'light' | 'accent' | 'outline'
  className?: string
}

export function ArrowButton({ to, children, variant = 'dark', className = '' }: Props) {
  return (
    <Link className={`arrow-button arrow-button--${variant} ${className}`} to={to}>
      <span>{children}</span>
      <span className="arrow-button__icon" aria-hidden="true"><ArrowRight size={16} strokeWidth={1.7} /></span>
    </Link>
  )
}
