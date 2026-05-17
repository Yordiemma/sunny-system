import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from './Button'

const meta = {
  title: 'Design System/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['primary', 'neutral', 'subtle'],
    },
    size: {
      control: 'inline-radio',
      options: ['sm', 'md'],
    },
  },
  args: {
    children: 'Add task',
    size: 'md',
    variant: 'primary',
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const Neutral: Story = {
  args: {
    children: 'Edit',
    variant: 'neutral',
  },
}

export const Subtle: Story = {
  args: {
    children: 'Cancel',
    variant: 'subtle',
  },
}

export const Disabled: Story = {
  args: {
    children: 'Save',
    disabled: true,
  },
}
