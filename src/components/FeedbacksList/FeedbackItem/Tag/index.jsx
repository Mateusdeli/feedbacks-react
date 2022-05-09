import React from 'react'
import * as S from './styles'

export default function Tag({ bgColor, children }) {
  return (
    <S.Container bgColor={bgColor} color="white">
       {children}
    </S.Container>
  )
}
