import type { HTMLAttributes, PropsWithChildren } from 'react'
import './NotebookToolbar.css'

export type NotebookToolbarProps = PropsWithChildren<
  HTMLAttributes<HTMLDivElement>
>

export function NotebookToolbar({
  children,
  className,
  ...props
}: NotebookToolbarProps) {
  const classes = ['jn-notebook-toolbar', className].filter(Boolean).join(' ')

  return (
    <div className={classes} role="toolbar" {...props}>
      {children}
    </div>
  )
}
