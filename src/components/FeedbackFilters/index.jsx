import React, { useState } from 'react'
import Heading from '../Heading'
import FilterItem from './FilterItem'
import * as S from './styles'

export default function FeedbackFilters() {
  const [data, setData] = useState([
    { text: 'Todos', amount: 300, color: 'blue', active: false },
    { text: 'Problemas', amount: 150, color: 'red', active: false },
    { text: 'Ideias', amount: 50, color: 'yellow', active: false },
    { text: 'Outros', amount: 100, color: 'lightBrown', active: false },
  ])

  function handleSelect(currentIndex) {
    setData(
      data.map((d, index) => {
        return index === currentIndex
          ? { ...d, active: true }
          : { ...d, active: false }
      }),
    )
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
