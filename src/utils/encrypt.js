import { hash, compare } from 'bcrypt'

const saltRounds = 10

async function create(data) {
  try {
    return await hash(data, saltRounds)
  } catch (err) {
    throw new Error(err)
  }
}

async function equals(plain, encrypted) {
  try {
    return await compare(plain, encrypted)
  } catch (err) {
    throw new Error(err)
  }
}

export { create, equals }
