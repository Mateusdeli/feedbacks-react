import React, { useEffect, useState } from 'react'
import Heading from '../Heading'
import FilterItem from './FilterItem'
import * as S from './styles'
import { types } from '../../constants/feedback'
import useFeedbackContext from '../../hooks/useFeedbackContext'

export default function FeedbackFilters() {
  const [data, setData] = useState([])
  const { feedbacks, selectFeedbacksByType } = useFeedbackContext()

  useEffect(() => {
    setData([
      {
        text: 'Todos',
        amount: feedbacks.length,
        color: 'blue',
        active: true,
      },
      {
        text: 'Problemas',
        type: types.problem,
        amount: getFeedbackAmountByType(types.problem),
        color: 'red',
        active: false,
      },
      {
        text: 'Ideias',
        type: types.idea,
        amount: getFeedbackAmountByType(types.idea),
        color: 'yellow',
        active: false,
      },
      {
        text: 'Outros',
        type: types.other,
        amount: getFeedbackAmountByType(types.other),
        color: 'lightBrown',
        active: false,
      },
    ])
  }, [feedbacks])

  function getFeedbackAmountByType(type) {
    let amount = 0
    feedbacks.forEach((feedback) => {
      if (feedback.type === type) {
        amount += 1
      }
    })
    return amount
  }

  function handleSelect(currentIndex) {
    const filterData = data.map((d, index) => {
      return index === currentIndex
        ? { ...d, active: true }
        : { ...d, active: false }
    })

    setData(filterData)
    selectFeedbacksByType(data[currentIndex].type)
  }

  return (
    <S.FilterContainer>
      <Heading alias="sm">Filtros</Heading>
      <S.FilterItemsContainer>
        {data.map((d, index) => (
          <FilterItem
            key={index}
            onSelect={() => handleSelect(index)}
            loading={true}
            active={d.active}
            text={d.text}
            amount={d.amount}
            color={d.color}
          />
        ))}
      </S.FilterItemsContainer>
    </S.FilterContainer>
  )
}
