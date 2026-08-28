{/*Cell.tsx*/}
import type { HTMLAttributes, PropsWithChildren } from 'react'
import './Cell.css'

export type CellProps = PropsWithChildren<HTMLAttributes<HTMLElement>>

export function Cell({ children, className, ...props }: CellProps) {
  const classes = ['jn-cell', className].filter(Boolean).join(' ')

  return (
    <article className={classes} {...props}>
      {children}
    </article>
  )
}
