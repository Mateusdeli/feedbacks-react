import styled, { css } from 'styled-components'

const wrapperModifiers = {
  sm: () => css`
    font-size: 24px;
    font-weight: 400;
  `,
  md: () => css`
    font-size: 36px;
    font-weight: 900;
  `,
  lg: () => css`
    font-size: 48px;
    font-weight: 900;
  `,
}

const Wrapper = styled.h2(
  ({ theme, alias, color }) => `
    font-family: 'Roboto';
    font-style: normal;

    color: ${theme.colors[color]};

    margin: 0;
    ${!!alias && wrapperModifiers[alias]()};
`,
)

export { Wrapper }
