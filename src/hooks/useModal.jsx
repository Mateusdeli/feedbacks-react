import React, { useState } from 'react'

export default function useModal() {
  const [state, setState] = useState(false)

  function Open() {
    setState(true)
  }

  function Close() {
    setState(false)
  }

  return [state, Open, Close]
}
