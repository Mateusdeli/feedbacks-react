import useUserContext from '../hooks/useUserContext'
import * as auth from '../utils/auth'

export default function useAuth() {
  const { setData } = useUserContext()

  async function login(data) {
    const { email, password } = data

    const response = await auth.login({ email, password })

    if (!response.error) {
      setUserLogged({
        name: response.data?.user.name,
        email: response.data?.user.email,
        token: response.data?.token,
      })

      localStorage.setItem('token', response.data.token)
    }

    return response
  }

  async function register(data) {
    const { name, email, password } = data

    const response = await auth.register({
      name,
      email,
      password,
    })

    if (!response.error) {
      setUserLogged({
        name,
        email,
        token: response.data?.token,
      })

      localStorage.setItem('token', response.data.token)
    }

    return response
  }

  async function loadSession() {
    const token = localStorage.getItem('token')

    if (token) {
      const { data } = await auth.loadSession({ token })
      if (data) {
        setUserLogged({
          name: data?.name,
          email: data?.email,
          token,
        })
        return Promise.resolve(true)
      }
    }
    logout()
    return Promise.reject(false)
  }

  function logout() {
    setData({
      logged: false,
    })
    localStorage.clear('token')
    return true
  }

  function setUserLogged(data) {
    setData({
      ...data,
      logged: true,
    })
  }

  return {
    login,
    register,
    logout,
    loadSession,
  }
}
