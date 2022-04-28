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
      })
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
      })
    }

    localStorage.setItem('token', response.data.token)

    return response
  }

  function logout() {
    setData({
      logged: false,
    })
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
  }
}
