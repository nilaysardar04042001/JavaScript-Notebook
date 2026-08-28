import type { HTMLAttributes, PropsWithChildren } from 'react'
import './CellList.css'

export type CellListProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>

export function CellList({ children, className, ...props }: CellListProps) {
  const classes = ['jn-cell-list', className].filter(Boolean).join(' ')

  return (
    <div className={classes} role="list" {...props}>
      {children}
    </div>
  )
}
