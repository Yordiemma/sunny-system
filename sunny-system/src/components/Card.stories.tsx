import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from './Button'
import { Card } from './Card'

const meta = {
  title: 'Design System/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    title: 'Checklist',
    children: <p className="checklist-app__meta">2 tasks remaining</p>,
  },
}

export const WithActions: Story = {
  args: {
    title: 'Checklist',
    actions: <Button size="sm">Add</Button>,
    children: (
      <p className="checklist-app__meta">Reusable surface component.</p>
    ),
  },
}
