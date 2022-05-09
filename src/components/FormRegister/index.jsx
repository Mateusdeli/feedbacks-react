import React, { useState } from 'react'
import { Modal, Overlay } from '../Modal'
import Heading from '../Heading'
import * as S from '../FormBase'
import Button from '../Button'
import TextField from '../TextField'
import CloseIcon from '../Icons/Close'
import Portal from '../Portal'
import useErrorHandler from '../../hooks/useErrorHandler'
import { useRouter } from 'next/router'
import * as auth from '../../utils/auth'
import routes from '../../constants/routes'
import useAuth from '../../hooks/useAuth'

export default function FormRegister({ Close }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { register } = useAuth()

  const router = useRouter()

  const [errors, addError] = useErrorHandler()

  async function handleSubmit(event) {
    event.preventDefault()
    if (!name) {
      addError('name', '* O campo nome é obrigatório')
    }
    if (!email) {
      addError('email', '* O campo email é obrigatório')
    }
    if (!password) {
      addError('password', '* O campo senha é obrigatório')
    }

    const response = await register({ name, email, password })

    if (!response?.error) {
      await router.push(routes.feedbacks)
    }
  }

  return (
    <Portal>
      <Overlay>
        <Modal>
          <S.Header>
            <Heading alias="md" color="black">
              Crie uma conta
            </Heading>
            <S.IconContainer onClick={Close}>
              <CloseIcon />
            </S.IconContainer>
          </S.Header>
          <form onSubmit={handleSubmit}>
            <TextField
              type="text"
              label="Nome"
              name="name"
              value={name}
              onInputChange={setName}
            />
            <TextField
              type="email"
              label="E-mail"
              name="email"
              value={email}
              onInputChange={setEmail}
              error={errors.email && errors.email.message}
            />
            <TextField
              type="password"
              label="Senha"
              name="password"
              value={password}
              onInputChange={setPassword}
              error="* O campo é obrigatório"
              error={errors.password && errors.password.message}
            />
            <Button
              type="submit"
              size="20px"
              color="white"
              background="primary"
            >
              Criar conta
            </Button>
          </form>
        </Modal>
      </Overlay>
    </Portal>
  )
}
