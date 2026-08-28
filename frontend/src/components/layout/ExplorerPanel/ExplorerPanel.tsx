import type { HTMLAttributes, PropsWithChildren } from 'react'
import './ExplorerPanel.css'

export type ExplorerPanelProps = PropsWithChildren<HTMLAttributes<HTMLElement>>

export function ExplorerPanel({
  children,
  className,
  ...props
}: ExplorerPanelProps) {
  const classes = ['jn-explorer-panel', className].filter(Boolean).join(' ')

  return (
    <aside className={classes} {...props}>
      {children}
    </aside>
  )
}
