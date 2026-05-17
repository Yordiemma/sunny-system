import type { ReactNode } from 'react'

type ListItemProps = {
  leading?: ReactNode
  label: string
  completed?: boolean
  onEdit?: () => void
  onDelete?: () => void
}

export function ListItem({
  leading,
  label,
  completed = false,
  onEdit,
  onDelete,
}: ListItemProps) {
  return (
    <div
      className={`ui-list-item${completed ? ' ui-list-item--completed' : ''}`}
    >
      <div className="ui-list-item__main">
        {leading ? (
          leading
        ) : (
          <span className="ui-list-item__dot" aria-hidden="true" />
        )}
        <span>{label}</span>
      </div>
      <div className="ui-list-item__actions">
        {onEdit ? (
          <button
            aria-label={`Edit ${label}`}
            className="ui-list-item__meta"
            type="button"
            onClick={onEdit}
          >
            Edit
          </button>
        ) : null}
        {onDelete ? (
          <button
            aria-label={`Delete ${label}`}
            className="ui-list-item__meta"
            type="button"
            onClick={onDelete}
          >
            Delete
          </button>
        ) : null}
      </div>
    </div>
  )
}
