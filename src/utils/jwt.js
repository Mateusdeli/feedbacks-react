var jwt = require('jsonwebtoken')

const SECRET_KEY = process.env.JWT_SECRET_KEY
const EXPIRE_TIME = process.env.JWT_EXPIRE_TIME

function create(payload) {
  return jwt.sign(payload, SECRET_KEY, {
    expiresIn: EXPIRE_TIME,
    issuer: '/',
  })
}

function check(token) {
  const data = jwt.verify(token, SECRET_KEY)
  return data ? true : false
}

function decoder(token) {
  return jwt.decode(token, { json: true })
}

export { create, check, decoder }
