import apiRoutes from '../constants/api-routes'
import * as http from './http'

async function login(data) {
  const { email, password } = data

  if (email && password) {
    try {
      return await http.post(apiRoutes.login, { email, password })
    } catch (err) {
      return Promise.reject(err)
    }
  }
}

async function register(data) {
  const { name, email, password } = data
  if (name && email && password) {
    try {
      return await http.post(apiRoutes.register, { name, email, password })
    } catch (err) {
      return Promise.reject(err)
    }
  }
  return Promise.reject({
    message: 'Dados devem ser preenchidos',
  })
}

async function loadSession(data) {
  const { token } = data
  if (token) {
    try {
      const response = await http.post(apiRoutes.loadSession, { token })
      return response
    } catch (err) {
      return Promise.reject(err)
    }
  }
}

export { login, register, loadSession }
