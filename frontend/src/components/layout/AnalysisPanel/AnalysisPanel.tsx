import type { HTMLAttributes, PropsWithChildren } from 'react'
import './AnalysisPanel.css'

export type AnalysisPanelProps = PropsWithChildren<HTMLAttributes<HTMLElement>>

export function AnalysisPanel({
  children,
  className,
  ...props
}: AnalysisPanelProps) {
  const classes = ['jn-analysis-panel', className].filter(Boolean).join(' ')

  return (
    <aside className={classes} {...props}>
      {children}
    </aside>
  )
}
