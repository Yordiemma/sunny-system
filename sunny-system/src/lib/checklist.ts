export type ChecklistItem = {
  id: number
  label: string
  checked: boolean
}

export const initialChecklistItems: ChecklistItem[] = [
  { id: 1, label: 'Workout', checked: true },
  { id: 2, label: 'Clean floor', checked: false },
  { id: 3, label: 'Cook dinner', checked: false },
]

export function createChecklistItem(label: string, id: number): ChecklistItem {
  return {
    id,
    label: label.trim(),
    checked: false,
  }
}

export function addChecklistItem(
  items: ChecklistItem[],
  label: string,
  id: number,
) {
  const value = label.trim()

  if (!value) {
    return items
  }

  return [...items, createChecklistItem(value, id)]
}

export function renameChecklistItem(
  items: ChecklistItem[],
  id: number,
  label: string,
) {
  const value = label.trim()

  if (!value) {
    return items
  }

  return items.map((item) =>
    item.id === id ? { ...item, label: value } : item,
  )
}

export function removeChecklistItem(items: ChecklistItem[], id: number) {
  return items.filter((item) => item.id !== id)
}

export function toggleChecklistItem(
  items: ChecklistItem[],
  id: number,
  checked: boolean,
) {
  return items.map((item) => (item.id === id ? { ...item, checked } : item))
}

export function countRemainingItems(items: ChecklistItem[]) {
  return items.filter((item) => !item.checked).length
}
