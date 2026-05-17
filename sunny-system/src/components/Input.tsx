type InputProps = {
  label: string
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  readOnly?: boolean
}

export function Input({
  label,
  placeholder,
  value,
  onChange,
  readOnly = false,
}: InputProps) {
  return (
    <label className="ui-input">
      <span className="ui-input__label">{label}</span>
      <input
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange?.(event.target.value)}
        readOnly={readOnly}
      />
    </label>
  )
}
