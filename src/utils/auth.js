import * as http from './http'

async function login(data) {
  const { email, password } = data

  if (email && password) {
    try {
      const data = await http.post('/login', { email, password })
      return data
    } catch (err) {
      return Promise.reject(err)
    }
  }
}

async function register(data) {
  const { name, email, password } = data
  if (name && email && password) {
    try {
      const data = await http.post('/register', { name, email, password })
      return data
    } catch (err) {
      return Promise.reject(err)
    }
  }
  return Promise.reject({
    message: 'Dados devem ser preenchidos',
  })
}

export { login, register }
