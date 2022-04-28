import styled from 'styled-components'

const Container = styled.div`
  width: 100%;

  border-radius: 4px;

  background-color: ${({ theme }) => theme.colors.lightGray};

  box-shadow: 2px 4px 11px rgba(0, 0, 0, 0.02);

  padding: 1.2rem;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;

  padding-bottom: 1rem;
`

const AddressContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  max-width: 700px;
`

const IconContainer = styled.div`
  text-align: right;

  cursor: pointer;
`

export { Container, Header, AddressContainer, IconContainer }
