import React from 'react'
import * as S from './styles'

export default function Address({ title, address }) {
  return (
    <S.AddressContainer>
      <S.Title>{title}</S.Title>
      <S.Address alias="xs">{address}</S.Address>
    </S.AddressContainer>
  )
}
