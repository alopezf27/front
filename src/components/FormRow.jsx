import React from 'react'

export default function FormRow({label, value, onChange, name, placeholder}) {
  return (
    <label className="row">
      <span>{label}</span>
      <input
        name={name}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </label>
  )
}