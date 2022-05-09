import React from 'react'
import * as S from './styles'
import Banner from '../../components/Banner'
import { Container } from '../../components/Container'
import Base from '../Base'
import FormCreateFeedback from '../../components/FormCreateFeedback'

export default function DarFeedback() {
  return (
    <Base>
      <Banner
        title="Dê seu feedback!"
        info="Contribua com o seu feedback registrando ele aqui."
      />
      <S.Container>
        <FormCreateFeedback />
      </S.Container>
    </Base>
  )
}
