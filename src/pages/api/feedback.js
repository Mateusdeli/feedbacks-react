import prisma from '../../config/prisma'

export default async function handler(req, res) {
  const { description, type, userId } = req.body

  if (req.method === 'POST') {
    try {
      const feedback = await prisma.feedbacks.create({
        data: {
          description,
          type,
          userId,
        },
      })

      if (!feedback) {
        return sendErrorMessage(
          res,
          'Houve um erro ao tentar criar o feedback.',
        )
      }

      return res.status(201).send({
        message: 'Feedback criado com sucesso!',
        data: {
          ...feedback,
        },
      })
    } catch (error) {
      return sendErrorMessage(error)
    }
  }

  if (req.method === 'GET') {
    try {
    } catch (error) {
      return sendErrorMessage(error)
    }

    const feedbacks = await prisma.feedbacks.findMany({
      include: {
        user: {
          select: { id: true, device: true, location: true },
        },
      },
    })

    if (!feedbacks || feedbacks.length <= 0) {
      return sendErrorMessage(res, 'Nenhum feedback foi encontrado!')
    }

    return res.status(200).send({
      message: `${feedbacks.length} encontrados.`,
      data: {
        count: feedbacks.length,
        feedbacks,
      },
    })
  }
}

function sendErrorMessage(res, message) {
  return res.status(400).send({
    message,
  })
}
