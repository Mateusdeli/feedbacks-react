import PrivateRoute from '../components/PrivateRoute'
import FeedbacksTemplate from '../templates/Feedbacks'
import * as feedback from '../utils/feedback'

export default function Feedbacks({ feedbacks }) {
  return (
    <PrivateRoute>
      <FeedbacksTemplate feedbacks={feedbacks} />
    </PrivateRoute>
  )
}

export async function getStaticProps(context) {
  const feedbacks = await feedback.getAll()

  return {
    props: {
      feedbacks,
    },
  }
}
