import type { HTMLAttributes, PropsWithChildren } from 'react'
import './Header.css'

export type HeaderProps = PropsWithChildren<HTMLAttributes<HTMLElement>>

export function Header({ children, className, ...props }: HeaderProps) {
  const classes = ['jn-header', className].filter(Boolean).join(' ')

  return (
    <header className={classes} {...props}>
      {children}
    </header>
  )
}
