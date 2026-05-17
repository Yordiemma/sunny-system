import { useState, type FormEvent } from 'react'

import { Button } from './Button'
import { Card } from './Card'
import { Checkbox } from './Checkbox'
import { Input } from './Input'
import { ListItem } from './ListItem'
import {
  addChecklistItem,
  countRemainingItems,
  initialChecklistItems,
  removeChecklistItem,
  renameChecklistItem,
  toggleChecklistItem,
} from '../lib/checklist'

export function Checklist() {
  const [items, setItems] = useState(initialChecklistItems)
  const [draft, setDraft] = useState('')
  const [editingId, setEditingId] = useState<number | null>(null)

  const remainingCount = countRemainingItems(items)
  const editingItem = items.find((item) => item.id === editingId) ?? null
  const isEditing = editingItem !== null
  const isEmpty = items.length === 0

  function addItem(event?: FormEvent<HTMLFormElement>) {
    event?.preventDefault()
    const value = draft.trim()
    if (!value) return

    setItems((current) => addChecklistItem(current, value, Date.now()))
    setDraft('')
  }

  function startEdit(id: number) {
    const item = items.find((entry) => entry.id === id)
    if (!item) return
    setEditingId(id)
    setDraft(item.label)
  }

  function saveEdit(event?: FormEvent<HTMLFormElement>) {
    event?.preventDefault()
    const value = draft.trim()
    if (!value || editingId === null) return

    setItems((current) => renameChecklistItem(current, editingId, value))
    setEditingId(null)
    setDraft('')
  }

  function cancelEdit() {
    setEditingId(null)
    setDraft('')
  }

  function removeItem(id: number) {
    setItems((current) => removeChecklistItem(current, id))
    if (editingId === id) {
      cancelEdit()
    }
  }

  function toggleItem(id: number, checked: boolean) {
    setItems((current) => toggleChecklistItem(current, id, checked))
  }

  return (
    <section className="checklist-app" aria-label="Checklist app">
      <Card className="checklist-app__card">
        <div className="checklist-app__header">
          <p className="checklist-app__eyebrow">Checklist</p>
          <h2>My Checklist</h2>
          <p className="checklist-app__meta">
            {isEmpty
              ? 'No tasks yet'
              : `${remainingCount} task${remainingCount === 1 ? '' : 's'} remaining`}
          </p>
        </div>

        <div className="checklist-app__panel">
          {isEditing ? (
            <form className="checklist-app__composer" onSubmit={saveEdit}>
              <Input
                label="Edit task"
                placeholder="Rename task"
                value={draft}
                onChange={setDraft}
              />
              <div className="checklist-app__composer-actions">
                <Button
                  variant="primary"
                  type="submit"
                  disabled={!draft.trim()}
                >
                  Save
                </Button>
                <Button variant="subtle" onClick={cancelEdit}>
                  Cancel
                </Button>
              </div>
            </form>
          ) : (
            <form className="checklist-app__composer" onSubmit={addItem}>
              <Input
                label={isEmpty ? 'Add first task' : 'New task'}
                placeholder="Add a new task"
                value={draft}
                onChange={setDraft}
              />
              <div className="checklist-app__composer-actions">
                <Button
                  variant="primary"
                  type="submit"
                  disabled={!draft.trim()}
                >
                  Add task
                </Button>
              </div>
            </form>
          )}

          {isEmpty ? (
            <div className="checklist-app__empty">
              <p>Your checklist is empty.</p>
              <span>Add a task above to get started.</span>
            </div>
          ) : (
            <div className="checklist-app__items">
              {items.map((item) => (
                <div className="checklist-app__row" key={item.id}>
                  <ListItem
                    leading={
                      <Checkbox
                        ariaLabel={`${item.checked ? 'Mark incomplete' : 'Mark complete'}: ${item.label}`}
                        checked={item.checked}
                        onChange={(checked) => toggleItem(item.id, checked)}
                        focused={editingId === item.id}
                      />
                    }
                    label={item.label}
                    completed={item.checked}
                    onEdit={() => startEdit(item.id)}
                    onDelete={() => removeItem(item.id)}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </Card>
    </section>
  )
}
