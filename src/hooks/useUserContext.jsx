import React, { useContext } from 'react'
import { UserContext } from '../contexts/user'

export default function useUserContext() {
  const context = useContext(UserContext)
  return { ...context }
}
