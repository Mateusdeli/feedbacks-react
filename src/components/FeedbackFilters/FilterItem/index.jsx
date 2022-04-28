import React, { useState } from 'react'
import Skeleton from '../../Skeleton'
import * as S from './styles'

export default function FilterItem({ loading, active, text, amount, color, onSelect }) {

  if (loading) {
    return <Skeleton width={238} height={28} />
  }

  return (
    <S.Container onClick={onSelect} active={active}>
        <S.Text active={active} color={color} alias="sm">{text}</S.Text>
        <S.Amount active={active} color={color}>{amount}</S.Amount>
    </S.Container>
  )
}
