import type { HTMLAttributes, PropsWithChildren } from 'react'
import './Notebook.css'

export type NotebookProps = PropsWithChildren<HTMLAttributes<HTMLElement>>

export function Notebook({ children, className, ...props }: NotebookProps) {
  const classes = ['jn-notebook', className].filter(Boolean).join(' ')

  return (
    <section className={classes} {...props}>
      {children}
    </section>
  )
}
