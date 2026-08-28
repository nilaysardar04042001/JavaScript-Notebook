import type { HTMLAttributes, PropsWithChildren } from 'react'
import './Notebook.css'
import { NotebookToolbar } from '../NotebookToolbar'

export type NotebookProps = PropsWithChildren<HTMLAttributes<HTMLElement>>

export function Notebook({ children, className, ...props }: NotebookProps) {
  const classes = ['jn-notebook', className].filter(Boolean).join(' ')

  return (
    <section className={classes} {...props}>
        <NotebookToolbar>
            Notebook Toolbar
        </NotebookToolbar>
        {children}
    </section>
  )
}
