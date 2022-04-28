import React, { useState } from 'react'
import Text from '../../Text'
import ArrowDownIcon from '../../Icons/ArrowDown'
import * as S from './styles'
import Tag from './Tag'
import Address from './Address'
import ArrowUpIcon from '../../Icons/ArrowUp'

export default function FeedbackItem({ tag, time, text }) {
  const [expand, setExpand] = useState(false)

  function handleExpand() {
    setExpand(prev => !prev)
  }

  return (
    <S.Container>
      <S.Header>
        {tag && <Tag>{tag}</Tag>}
        <Text alias="xs" color="darkGray">
          {time}
        </Text>
      </S.Header>
      <Text alias="md">{text}</Text>
      {expand && (
        <S.AddressContainer>
          <Address title="página" address="https://feedbacker.com/ajuda" />
          <Address title="usuário" address="g9j0vLMEcN6Ffwxaplxp" />
          <Address title="dispositivo" address="Chrome 85.0, macOS 10.14" />
        </S.AddressContainer>
      )}
      {expand ? (
        <S.IconContainer onClick={handleExpand}>
          <ArrowUpIcon />
        </S.IconContainer>
      ) : (
        <S.IconContainer onClick={handleExpand}>
          <ArrowDownIcon />
        </S.IconContainer>
      )}
    </S.Container>
  )
}
