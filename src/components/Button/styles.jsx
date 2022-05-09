import styled, { css } from 'styled-components'

export const Wrapper = styled.a`
  ${({ theme, background, color, size, width }) => css`
    background: ${theme.colors[background] ?? background};
    color: ${theme.colors[color]};

    padding: 0.5rem 1rem;

    border: 0;
    border-radius: ${theme.border.radius};

    cursor: pointer;

    font-weight: 700;
    font-family: 'Roboto';
    font-style: normal;
    font-size: ${size};

    text-decoration: none;

    ${!!width &&
    css`
      max-width: ${width}px;
      min-width: ${width}px;
      width: 100%;
    `}
  `}
`
