import { describe, expect, it } from 'vitest'

import {
  addChecklistItem,
  countRemainingItems,
  removeChecklistItem,
  renameChecklistItem,
  toggleChecklistItem,
  type ChecklistItem,
} from './checklist'

const items: ChecklistItem[] = [
  { id: 1, label: 'Workout', checked: true },
  { id: 2, label: 'Clean floor', checked: false },
]

describe('checklist state helpers', () => {
  it('adds a trimmed checklist item', () => {
    expect(addChecklistItem(items, '  Cook dinner  ', 3)).toEqual([
      ...items,
      { id: 3, label: 'Cook dinner', checked: false },
    ])
  })

  it('does not add an empty item', () => {
    expect(addChecklistItem(items, '   ', 3)).toBe(items)
  })

  it('renames only the selected item', () => {
    expect(renameChecklistItem(items, 2, ' Mop floor ')).toEqual([
      { id: 1, label: 'Workout', checked: true },
      { id: 2, label: 'Mop floor', checked: false },
    ])
  })

  it('toggles only the selected item', () => {
    expect(toggleChecklistItem(items, 2, true)).toEqual([
      { id: 1, label: 'Workout', checked: true },
      { id: 2, label: 'Clean floor', checked: true },
    ])
  })

  it('removes an item by id', () => {
    expect(removeChecklistItem(items, 1)).toEqual([
      { id: 2, label: 'Clean floor', checked: false },
    ])
  })

  it('counts remaining unchecked items', () => {
    expect(countRemainingItems(items)).toBe(1)
  })
})
