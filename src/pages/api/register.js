import prisma from '../../config/prisma'
import * as jwt from '../../utils/jwt'
import * as encrypt from '../../utils/encrypt'

export default async function handler(req, res) {
  const { name, email, password } = req.body

  try {
    if (req.method === 'POST') {
      const passwordHash = await encrypt.create(password)

      const user = await prisma.user.findFirst({
        where: { email: { equals: email } },
      })

      if (user) {
        return res.status(500).send({
          message: 'Usuario já existe',
          error: true,
        })
      }

      const userCreated = await prisma.user.create({
        data: {
          name,
          email,
          password: passwordHash,
          location: getLocationInfo(req),
          device: getDeviceInfo(req),
        },
      })

      const token = jwt.create({
        id: userCreated.id,
        name,
        email,
      })

      return res.status(201).send({
        message: 'Usuario registrado com sucesso!',
        data: {
          token,
        },
        error: false,
      })
    }
  } catch (err) {
    return res.status(400).send({
      message: err,
    })
  }
}

function getLocationInfo(request) {
  return request.headers['host']
}

function getDeviceInfo(request) {
  const infos = request.headers['user-agent'].split(' ')
  const firstBrowserInfo = infos[infos.length - 2]
  const secoundBrowserInfo = infos[infos.length - 1]
  return `${firstBrowserInfo} ${secoundBrowserInfo}`
}
