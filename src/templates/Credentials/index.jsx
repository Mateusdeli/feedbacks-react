import React from 'react'
import * as S from './styles'
import Banner from '../../components/Banner'
import { Container } from '../../components/Container'
import Heading from '../../components/Heading'
import Text from '../../components/Text'
import Base from '../Base'
import TextField from '../../components/TextField'

export default function Credentials() {
  return (
    <Base>
      <Banner
        title="Credenciais"
        info="Guia de instalação e geração de suas credenciais"
      />
      <Container>
        <S.InstallationAndSettingsContainer>
          <Heading alias="md" color="black">
            Instalação e configuração
          </Heading>
          <Text alias="md" color="black">
            Este aqui é a sua chave de api
          </Text>
          <TextField
            type="text"
            name="apikey"
            initialValue="61795062-a37e-48c7-bdb6-50d030051ccb"
          />
          <Text alias="md" color="black">
            Coloque o script abaixo no seu site para começar a receber feedbacks
          </Text>
          <TextField
            type="text"
            name="script"
            initialValue="<script src=”http://user-feedbacker-widget.surge.sh?api_key=61.."
          />
        </S.InstallationAndSettingsContainer>
      </Container>
    </Base>
  )
}
