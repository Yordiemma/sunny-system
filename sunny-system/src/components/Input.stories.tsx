import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Input } from './Input'

const meta = {
  title: 'Design System/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    label: 'New task',
    placeholder: 'Add a new task',
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Empty: Story = {}

export const WithValue: Story = {
  render: (args) => {
    const [value, setValue] = useState('Cook dinner')

    return <Input {...args} value={value} onChange={setValue} />
  },
}
