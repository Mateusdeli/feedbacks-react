import React, { useState } from 'react'
import * as S from './styles'
import Button from '../Button'
import Select from '../Select'
import TextArea from '../TextArea'
import useErrorHandler from '../../hooks/useErrorHandler'
import useUserContext from '../../hooks/useUserContext'
import * as feedback from '../../utils/feedback'

const options = [
  { text: '-', value: '' },
  { text: 'Ideia', value: 'idea' },
  { text: 'Problema', value: 'problem' },
  { text: 'Outro', value: 'other' },
]

export default function FormCreateFeedback() {
  const { user } = useUserContext()
  const [description, setDescription] = useState('')
  const [type, setType] = useState('')

  const [errors, addError] = useErrorHandler()

  async function handleSubmit(event) {
    event.preventDefault()
    if (!type) {
      addError('type', '* O tipo do feedback não foi selecionado')
      return
    }
    if (!description) {
      addError('description', '* A descrição não foi preenchida')
      return
    }

    if (!user.id) {
      console.error('Usuario não encontrado')
    }

    const data = await feedback.create({
      description,
      type,
      userId: user.id,
    })

    console.log(data.message);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Select
        label="Tipo"
        name="type"
        options={options}
        value={type}
        onInputChange={setType}
        error={errors.type && errors.type.message}
      />
      <TextArea
        label="Descrição"
        rows={10}
        maxlength="30"
        name="description"
        value={description}
        onInputChange={setDescription}
        error={errors.description && errors.description.message}
      />
      <S.ButtonContainer>
        <Button type="submit" background="primary" color="white" width={150}>
          Enviar
        </Button>
      </S.ButtonContainer>
    </form>
  )
}
