import type { HTMLAttributes, PropsWithChildren } from 'react'
import './StatusBar.css'

export type StatusBarProps = PropsWithChildren<HTMLAttributes<HTMLElement>>

export function StatusBar({ children, className, ...props }: StatusBarProps) {
  const classes = ['jn-status-bar', className].filter(Boolean).join(' ')

  return (
    <footer className={classes} {...props}>
      {children}
    </footer>
  )
}
