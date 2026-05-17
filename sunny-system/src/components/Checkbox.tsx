type CheckboxProps = {
  label?: string
  ariaLabel?: string
  checked?: boolean
  onChange?: (checked: boolean) => void
  focused?: boolean
}

export function Checkbox({
  label = '',
  ariaLabel,
  checked = false,
  onChange,
  focused = false,
}: CheckboxProps) {
  return (
    <label className={`ui-checkbox${focused ? ' ui-checkbox--focused' : ''}`}>
      <input
        type="checkbox"
        checked={checked}
        aria-label={ariaLabel}
        onChange={(event) => onChange?.(event.target.checked)}
      />
      <span className="ui-checkbox__box" aria-hidden="true" />
      <span className="ui-checkbox__label">{label}</span>
    </label>
  )
}
