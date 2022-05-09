import * as http from './http'
import apiRoutes from '../constants/api-routes'

async function create(data) {
  const { description, type, userId } = data
  const response = await http.post(apiRoutes.feedback, { description, type, userId })
  return response
}

async function getAll() {
  const feedbacks = await http.get(apiRoutes.feedback)
  return feedbacks
}

export { getAll, create }
