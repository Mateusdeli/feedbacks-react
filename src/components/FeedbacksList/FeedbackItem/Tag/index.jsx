import React from 'react'
import * as S from './styles'

export default function Tag({ children }) {
  return (
    <S.Container color="white">
       {children}
    </S.Container>
  )
}
