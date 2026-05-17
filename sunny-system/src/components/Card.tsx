import type { ReactNode } from 'react'

type CardProps = {
  title?: string
  actions?: ReactNode
  children?: ReactNode
  className?: string
}

export function Card({ title, actions, children, className = '' }: CardProps) {
  return (
    <article className={`ui-card${className ? ` ${className}` : ''}`}>
      {title || actions ? (
        <div className="ui-card__top">
          {title ? <h3>{title}</h3> : <span />}
          {actions ? <div className="ui-card__actions">{actions}</div> : null}
        </div>
      ) : null}
      {children}
    </article>
  )
}
