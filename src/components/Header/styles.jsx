import styled from 'styled-components'
import { Container as BaseContainer } from '../Container'

const Background = styled.div`
  padding: 2rem 0;

  max-width: 100%;

  background: ${({ theme }) => theme.colors.primary};
`

const Container = styled(BaseContainer)`
  display: flex;
  justify-content: space-between;
`

const Nav = styled.nav``

const NavList = styled.ul`
  display: flex;
  align-items: center;

  gap: 30px;

  padding: 0;
  list-style: none;
`

const NavItem = styled.li``

export { Background, Container, Nav, NavList, NavItem }
