import styled, { css } from 'styled-components'

export const Wrapper = styled.a`
  ${({ theme, background, color, size }) => css`
    background: ${theme.colors[background] ?? background};
    color: ${theme.colors[color]};

    padding: .5rem 1rem;

    border: 0;
    border-radius: ${theme.border.radius};

    cursor: pointer;

    font-weight: 700;
    font-family: 'Roboto';
    font-style: normal;
    font-size: ${size};

    text-decoration: none;
  `}
`
