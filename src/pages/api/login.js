import prisma from '../../config/prisma'
import * as encrypt from '../../utils/encrypt'
import * as jwt from '../../utils/jwt'

export default async function handler(req, res) {
  const { email, password } = req.body

  if (!req.body === 'POST') {
    return res.status(500).send({
      message: 'Operação não permitida.',
      error: true,
    })
  }

  const user = await prisma.user.findFirst({
    where: { email: { equals: email } },
  })

  if (!user) {
    return sendMessageCredentialsInvalid(res)
  }

  const passwordEquals = await encrypt.equals(password, user.password)

  if (!passwordEquals) {
    return sendMessageCredentialsInvalid(res)
  }

  if (user.email !== email || !passwordEquals) {
    return sendMessageCredentialsInvalid(res)
  }

  const token = jwt.create({
    name: user.name,
    email: user.email
  })

  return res.status(200).send({
    data: {
      user: {
        name: user.name,
        email: user.email,
      },
      token,
    },
    message: 'Login realizado com sucesso!',
    error: false,
  })
}

function sendMessageCredentialsInvalid(res) {
  return res.status(400).send({
    message: 'Credenciais inválidas, por favor tente novamente.',
    error: true,
  })
}
