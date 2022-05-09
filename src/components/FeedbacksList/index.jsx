import React, { useEffect, useState } from 'react'
import * as S from './styles'
import FeedbackItem from './FeedbackItem'
import useFeedbackContext from '../../hooks/useFeedbackContext'

export default function FeedbacksList() {
  const { feedbackType, getFeedbacksByType } = useFeedbackContext()
  const [feedbacks, setFeedbacks] = useState([])

  useEffect(() => {
    const result = getFeedbacksByType(feedbackType)
    setFeedbacks(result)
  }, [feedbackType])

  return (
    <S.FeedbacksContainer>
      {feedbacks?.map((feedback, index) => (
        <FeedbackItem key={index} feedback={feedback} />
      ))}
    </S.FeedbacksContainer>
  )
}
