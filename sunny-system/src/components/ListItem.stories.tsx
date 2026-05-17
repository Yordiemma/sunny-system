import type { Meta, StoryObj } from '@storybook/react-vite'

import { Checkbox } from './Checkbox'
import { ListItem } from './ListItem'

const meta = {
  title: 'Design System/ListItem',
  component: ListItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    label: 'Cook dinner',
  },
} satisfies Meta<typeof ListItem>

export default meta
type Story = StoryObj<typeof meta>

export const WithDot: Story = {}

export const WithCheckbox: Story = {
  args: {
    leading: <Checkbox ariaLabel="Mark complete: Cook dinner" />,
    onEdit: () => undefined,
    onDelete: () => undefined,
  },
}

export const Completed: Story = {
  args: {
    completed: true,
    leading: <Checkbox ariaLabel="Mark incomplete: Workout" checked />,
    label: 'Workout',
  },
}
