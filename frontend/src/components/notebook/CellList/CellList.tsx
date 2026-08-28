{/*CellList.tsx*/}
import type { HTMLAttributes, PropsWithChildren } from 'react'
import './CellList.css'
import { Cell } from '.././Cell'

export type CellListProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>

export function CellList({ children, className, ...props }: CellListProps) {
  const classes = ['jn-cell-list', className].filter(Boolean).join(' ')

  return (
    <div className={classes} role="list" {...props}>
        <Cell>
            Cell 1
        </Cell>
        {children}
    </div>
  )
}
