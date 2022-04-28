import React from 'react'
import Button from '../../components/Button'
import { Container } from '../../components/Container'
import FormRegister from '../../components/FormRegister'
import { Col, Row } from '../../components/Grid'
import Heading from '../../components/Heading'
import Text from '../../components/Text'
import { Image } from '../../components/Image'
import useModal from '../../hooks/useModal'
import Base from '../Base'
import * as S from './styles'

export default function Home() {
  const [modalFormRegister, Open, Close] = useModal()

  return (
    <Base>
      <S.Container>
        {modalFormRegister && <FormRegister Close={Close} />}
        <Container>
          <Row align="center">
            <Col>
              <Heading alias="lg" color="white">
                Tenha um feedback.
                <br />E faça seus clientes mais
                <br /> felizes!
              </Heading>
              <Text alias="lg" color="white">
                Receba ideias, reclamações e feedbacks com um simples widget na
                página.
              </Text>
              <Button onClick={Open} background="white" color="primary">
                Crie uma conta grátis
              </Button>
            </Col>
            <Col>
              <Image src="img/ballons.png" />
            </Col>
          </Row>
        </Container>
      </S.Container>
      <Container>
        <S.DoubtsContainer>
          <Heading alias="lg" color="black">
            Alguma dúvida?
          </Heading>
          <Text alias="md" color="black">
            Quer saber melhor como funciona e quais são os preços?
          </Text>
          <Button background="primary" color="white">
            Nos mande um e-mail!
          </Button>
        </S.DoubtsContainer>
      </Container>
      <S.CreditsContainer>
        <Text alias="md" color="black">
          feedbacker © 2020
        </Text>
      </S.CreditsContainer>
    </Base>
  )
}
