import React from 'react'
import useUserContext from '../../hooks/useUserContext'
import Home from '../../pages'

export default function PrivateRoute({ children }) {
  const { user } = useUserContext()

  return (
    <React.Fragment>
      {user?.logged ? children : <Home />}
    </React.Fragment>
  )
}
