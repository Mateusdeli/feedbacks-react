import Link from 'next/link'
import React from 'react'
import * as S from './styles'

export default function Button({
  path,
  color,
  background = 'transparent',
  size = '18px',
  children,
  ...props
}) {
  if (path) {
    return (
      <Link href={path} passHref>
        <S.Wrapper color={color} size={size} background={background} {...props}>
          {children}
        </S.Wrapper>
      </Link>
    )
  }

  return (
    <S.Wrapper as="button" size={size} color={color} background={background} {...props}>
      {children}
    </S.Wrapper>
  )
}
