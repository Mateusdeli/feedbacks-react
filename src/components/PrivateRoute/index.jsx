import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import routes from '../../constants/routes'
import useAuth from '../../hooks/useAuth'
import Home from '../../pages'

export default function PrivateRoute({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const { loadSession } = useAuth()
  const router = useRouter()

  useEffect(() => {
    handleAuthenticated()
  }, [])

  async function handleAuthenticated() {
    try {
      const session = await loadSession()
      if (session) {
        setIsAuthenticated(true)
      }
    } catch (err) {
      setIsAuthenticated(false)
      router.push(routes.home)
    }
  }

  return <React.Fragment>{isAuthenticated && children}</React.Fragment>
}
