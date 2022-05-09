import React, { useEffect, useState } from 'react'
import Text from '../../Text'
import ArrowDownIcon from '../../Icons/ArrowDown'
import * as S from './styles'
import Tag from './Tag'
import Address from './Address'
import ArrowUpIcon from '../../Icons/ArrowUp'
import * as datetime from '../../../utils/datetime'

const tagsOptions = {
  problem: { text: 'problema', color: 'red' },
  idea: { text: 'ideia', color: 'yellow' },
  other: { text: 'outro', color: 'lightBrown' },
}

export default function FeedbackItem({ feedback }) {
  const [expand, setExpand] = useState(false)
  const [tag, setTag] = useState('')

  function handleExpand() {
    setExpand((prev) => !prev)
  }

  useEffect(() => {
    setTag(tagsOptions[feedback.type])
  }, [feedback.type])

  useEffect(() => {
    return () => setExpand(false)
  }, [feedback])

  return (
    <S.Container>
      <S.Header>
        {!!feedback.type && <Tag bgColor={tag.color}>{tag.text}</Tag>}
        <Text alias="xs" color="darkGray">
          {datetime.timeSince(new Date(feedback.date))} atrás
        </Text>
      </S.Header>
      <Text alias="md">{feedback.description}</Text>
      {expand && (
        <S.AddressContainer>
          <Address title="página" address={feedback.user.location} />
          <Address title="usuário" address={feedback.user.id} />
          <Address title="dispositivo" address={feedback.user.device} />
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
