import React, { useEffect } from 'react'
import Banner from '../../components/Banner'
import { Container } from '../../components/Container'
import FeedbackFilters from '../../components/FeedbackFilters'
import FeedbacksList from '../../components/FeedbacksList'
import useFeedbackContext from '../../hooks/useFeedbackContext'
import Base from '../Base'
import * as S from './styles'

export default function Feedbacks({ feedbacks }) {
  const { setFeedbacks } = useFeedbackContext()

  useEffect(() => {
    setFeedbacks(feedbacks?.data.feedbacks)
  }, [feedbacks])

  return (
    <Base>
      <Banner
        title="Feedbacks"
        info="Detalhes de todos os feedbacks recebidos."
      />
      <Container>
        <S.ListingText alias="md">Listagem</S.ListingText>

        <S.ListingContainer>
          <FeedbackFilters />
          <FeedbacksList />
        </S.ListingContainer>
      </Container>
    </Base>
  )
}
