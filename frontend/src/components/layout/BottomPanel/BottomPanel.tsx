import type { HTMLAttributes, PropsWithChildren } from 'react'
import './BottomPanel.css'

export type BottomPanelProps = PropsWithChildren<HTMLAttributes<HTMLElement>>

export function BottomPanel({
  children,
  className,
  ...props
}: BottomPanelProps) {
  const classes = ['jn-bottom-panel', className].filter(Boolean).join(' ')

  return (
    <section className={classes} {...props}>
      {children}
    </section>
  )
}
