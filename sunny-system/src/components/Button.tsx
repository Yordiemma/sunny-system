import type { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'className'
> & {
  children: ReactNode
  variant?: 'primary' | 'neutral' | 'subtle'
  size?: 'sm' | 'md'
}

export function Button({
  children,
  variant = 'neutral',
  size = 'md',
  type = 'button',
  disabled = false,
  ...buttonProps
}: ButtonProps) {
  return (
    <button
      className={`ui-button ui-button--${variant} ui-button--${size}`}
      type={type}
      disabled={disabled}
      {...buttonProps}
    >
      {children}
    </button>
  )
}
