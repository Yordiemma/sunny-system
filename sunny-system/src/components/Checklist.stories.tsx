import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'

import { Checklist } from './Checklist'

const meta = {
  title: 'Feature/Checklist',
  component: Checklist,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Checklist>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const AddTaskFlow: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await userEvent.type(canvas.getByLabelText(/new task/i), 'Read rubric')
    await userEvent.click(canvas.getByRole('button', { name: /add task/i }))

    await expect(canvas.getByText('Read rubric')).toBeInTheDocument()
    await expect(canvas.getByText(/3 tasks remaining/i)).toBeInTheDocument()
  },
}
