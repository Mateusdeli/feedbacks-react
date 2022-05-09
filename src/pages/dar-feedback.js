import PrivateRoute from '../components/PrivateRoute'
import DarFeedbackTemplate from '../templates/DarFeedback'

export default function DarFeedback() {
  return (
    <PrivateRoute>
      <DarFeedbackTemplate />
    </PrivateRoute>
  )
}
