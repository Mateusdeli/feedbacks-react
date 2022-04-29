import * as jwt from '../../utils/jwt'

export default async function handler(req, res) {
  const { token } = req.body

  if (token) {
    try {
      const isValid = jwt.check(token)

      if (isValid) {
        const payload = jwt.decoder(token)
        return res.status(200).send({ data: payload })
      }
    } catch (err) {
      return res.status(403).send({
        message: err,
      })
    }
  }

  return res.status(400)
}
