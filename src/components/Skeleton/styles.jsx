import styled, { css } from 'styled-components'

const Container = styled.div`
  ${({ width, height }) => css`
    max-width: ${width}px;
    min-height: ${height}px;

    background: rgba(0, 0, 0, 0.11);
    border-radius: 4px;

    animation: animation-c7515d 1.5s ease-in-out 0.5s infinite;

    margin: .5rem 0;
  `}
`

export { Container }
