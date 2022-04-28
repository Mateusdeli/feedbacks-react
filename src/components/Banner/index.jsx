import React from 'react'
import Heading from '../Heading'
import Text from '../Text'
import * as S from './styles'

export default function Banner({ title, info }) {
  return (
    <S.Container>
      <Heading alias="lg" color="black">
        {title}
      </Heading>
      <Text alias="md" color="black">
        {info}
      </Text>
    </S.Container>
  )
}
