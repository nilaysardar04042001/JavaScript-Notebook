{/* AppShell.tsx*/}
import type { HTMLAttributes, PropsWithChildren } from 'react'
import './AppShell.css'

export type AppShellProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>

export function AppShell({ children, className, ...props }: AppShellProps) {
  const classes = ['jn-app-shell', className].filter(Boolean).join(' ')

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}
