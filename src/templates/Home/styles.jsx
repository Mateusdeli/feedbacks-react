import styled from 'styled-components'

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
`

const DoubtsContainer = styled.div`
  text-align: center;
  padding: 4rem 0;
`

const CreditsContainer = styled.div`
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.colors.lightGray};
  text-align: center;
`

export { Container, DoubtsContainer, CreditsContainer }
