import styled, { css } from 'styled-components'

export const SelectWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding: 1rem 0;
  `}
`

export const Select = styled.select`
  ${({ theme, iconPosition, height }) => css`
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
    min-height: ${height ? `${height}px` : '100%'};
    resize: none;
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
    ${Select} {
      border: 4px solid ${theme.colors.red};
    },
    ${Select} {
      color: ${theme.colors.red};
    },
  `,
  disabled: (theme) => css`
    ${Label},
    ${Input},
  `
}

export const Wrapper = styled.div`
  ${({ theme, error, disabled }) => css`
    ${error && wrapperModifiers.error(theme)}
    ${disabled && wrapperModifiers.disabled(theme)}
  `}
`