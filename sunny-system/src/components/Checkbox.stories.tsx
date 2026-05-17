import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Checkbox } from './Checkbox'

const meta = {
  title: 'Design System/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    label: 'Workout',
    checked: false,
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(args.checked)

    return <Checkbox {...args} checked={checked} onChange={setChecked} />
  },
}

export const Checked: Story = {
  args: {
    checked: true,
  },
}

export const Focused: Story = {
  args: {
    focused: true,
  },
}
