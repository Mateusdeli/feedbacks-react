import React from 'react'
import * as S from './styles'

const Text = ({ color = 'black', alias = 'sm', children, ...props }) => (
  <S.Wrapper alias={alias} color={color} {...props}>
    {children}
  </S.Wrapper>
)

export default Text
