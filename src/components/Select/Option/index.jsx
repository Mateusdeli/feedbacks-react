import React from 'react'

export default function Option({ value, children, ...props }) {
  return (
    <option value={value} selected {...props}>
      {children}
    </option>
  )
}
