import { useContext, useCallback } from 'react'
import { FeedbackContext } from '../contexts/feedback'

export default function useFeedbackContext() {
  const context = useContext(FeedbackContext)

  const getFeedbacksByType = (type) => {
    if (!type) {
      return context.feedbacks
    }
    return context.feedbacks.filter((feedback) => feedback.type === type)
  }

  return { ...context, getFeedbacksByType }
}
