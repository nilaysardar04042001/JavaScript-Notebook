import type { HTMLAttributes, PropsWithChildren } from 'react'
import './MainWorkspace.css'

export type MainWorkspaceProps = PropsWithChildren<HTMLAttributes<HTMLElement>>

export function MainWorkspace({
  children,
  className,
  ...props
}: MainWorkspaceProps) {
  const classes = ['jn-main-workspace', className].filter(Boolean).join(' ')

  return (
    <main className={classes} {...props}>
      {children}
    </main>
  )
}
