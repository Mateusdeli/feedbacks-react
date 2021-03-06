import React, { useState } from 'react'
import Portal from '../Portal'
import { Modal, Overlay } from '../Modal'
import Heading from '../Heading'
import * as S from '../FormBase'
import CloseIcon from '../Icons/Close'
import TextField from '../TextField'
import Button from '../Button'
import { useRouter } from 'next/router'
import routes from '../../constants/routes'
import useAuth from '../../hooks/useAuth'

export default function FormSignIn({ Close }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { login } = useAuth()

  const router = useRouter()

  async function handleSubmit(event) {
    event.preventDefault()

    const response = await login({ email, password })

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
              Entre na sua conta
            </Heading>
            <S.IconContainer onClick={Close}>
              <CloseIcon />
            </S.IconContainer>
          </S.Header>
          <form onSubmit={handleSubmit}>
            <TextField
              type="email"
              label="E-mail"
              name="email"
              onInputChange={setEmail}
              value={email}
            />
            <TextField
              type="password"
              label="Senha"
              name="password"
              onInputChange={setPassword}
              value={password}
            />
            <Button background="primary" color="white">
              Entrar
            </Button>
          </form>
        </Modal>
      </Overlay>
    </Portal>
  )
}
