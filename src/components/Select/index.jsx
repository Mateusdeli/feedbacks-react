import React, { useState } from 'react'
import Option from './Option'
import * as S from './styles'

export default function Select({
  id,
  name,
  options,
  label,
  error,
  disabled,
  onInputChange,
  ...props
}) {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    const newValue = event.target.value
    setValue({ ...value, [name]: newValue })
    !!onInputChange && onInputChange(newValue)
  }

  return (
    <React.Fragment>
      <S.Wrapper disabled={disabled} error={!!error}>
        {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
        <S.SelectWrapper>
          <S.Select
            onChange={onChange}
            value={value}
            disabled={disabled}
            name={name}
            {...(label ? { id: name } : {})}
            {...props}
          >
            {!!options &&
              options.map((option, index) => (
                <Option key={index} selected={option.selected} value={option.value}>{option.text}</Option>
              ))}
          </S.Select>
        </S.SelectWrapper>
        {!!error && <S.Error>{error}</S.Error>}
      </S.Wrapper>
    </React.Fragment>
  )
}
