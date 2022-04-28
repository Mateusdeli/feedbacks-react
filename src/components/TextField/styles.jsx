import styled, { css } from 'styled-components'

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
  `}
`

export const Input = styled.input`
  ${({ theme, iconPosition }) => css`
    color: ${theme.colors.gray};
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    padding: 1rem;
    background: ${theme.colors.lightWhite};
    border-radius: 4px;
    border: 0;
    outline: none;
    width: ${iconPosition === 'right' ? `calc(100% - 2.2rem)` : `100%`};
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    color: ${theme.colors.black};
    cursor: pointer;
  `}
`

export const Icon = styled.div`
  ${({ theme, iconPosition }) => css`
    display: flex;
    color: ${theme.colors.gray};
    order: ${iconPosition === 'right' ? 1 : 0};
    & > svg {
      width: 2.2rem;
      height: 100%;
    }
  `}
`

export const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.red};
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
  `}
`

const wrapperModifiers = {
  error: (theme) => css`
    ${InputWrapper} {
      border: 4px solid ${theme.colors.red};
    },
    ${Input} {
      color: ${theme.colors.red};
    },
    ${Icon},
  `,
  disabled: (theme) => css`
    ${Label},
    ${Input},
    ${Icon} {
      cursor: not-allowed;
      color: ${theme.colors.gray};
      &::placeholder {
        color: currentColor;
      }
    }
  `
}

export const Wrapper = styled.div`
  ${({ theme, error, disabled }) => css`
    ${error && wrapperModifiers.error(theme)}
    ${disabled && wrapperModifiers.disabled(theme)}
  `}
`