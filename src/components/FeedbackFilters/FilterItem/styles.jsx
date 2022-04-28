import styled, { css } from 'styled-components'
import TextBase from '../../Text'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 1rem;

  margin: 0.5rem 0;

  height: 29px;

  cursor: pointer;

  ${({ active }) =>
    active &&
    css`
      background-color: rgba(196, 196, 196, 0.32);

      border-radius: 4px;
    `}
`

const Text = styled(TextBase)`
  color: ${({ theme }) => theme.colors.black};

  ${({ theme, active, color }) =>
    active &&
    css`
      color: ${theme.colors[color]};
    `};

  &::before {
    content: '';
    display: inline-block;

    background-color: ${({ theme, color }) => theme.colors[color]};

    width: 5px;
    height: 5px;

    border-radius: 100%;

    margin-bottom: 2px;
    margin-right: 7px;
  }
`

const Amount = styled(TextBase)`
  font-weight: bold;

  color: ${({ theme }) => theme.colors.black};

  ${({ theme, color, active }) =>
    active &&
    css`
      color: ${theme.colors[color]};
    `}
`

export { Container, Text, Amount }
