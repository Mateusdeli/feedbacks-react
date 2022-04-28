import styled, { css } from 'styled-components'

const wrapperModifiers = {
  xs: () => css`
    font-size: 13px;
    font-weight: 500;
  `,
  sm: () => css` 
    font-size: 14px;
    font-weight: 500;
  `,
  md: () => css`
    font-size: 18px;
    font-weight: 400;
  `,
  lg: () => css`
    font-size: 24px;
    font-weight: 400;
  `,
}

const Wrapper = styled.p(
  ({ theme, alias, color }) => `
    font-family: 'Roboto';
    font-style: normal;

    color: ${theme.colors[color]};

    ${!!alias && wrapperModifiers[alias]()};
`,
)

export { Wrapper }
