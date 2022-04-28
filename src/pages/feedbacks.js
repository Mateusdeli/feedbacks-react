import PrivateRoute from '../components/PrivateRoute'
import FeedbacksTemplate from '../templates/Feedbacks'

export default function Feedbacks() {
  return (
    <PrivateRoute>
      <FeedbacksTemplate />
    </PrivateRoute>
  )
}
