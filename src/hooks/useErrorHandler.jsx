import React, { useState } from 'react'

export default function useError() {
  const [errors, setErrors] = useState({})

  function addError(field, message) {
    setErrors({ ...errors, [field]: { message }})
  }

  return [errors, addError]

}
