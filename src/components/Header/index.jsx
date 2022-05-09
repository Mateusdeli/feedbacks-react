import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Button from '../../components/Button'
import FormRegister from '../../components/FormRegister'
import Logo from '../../components/Logo'
import useModal from '../../hooks/useModal'
import FormSignIn from '../FormSignIn'
import * as C from './styles'
import routes from '../../constants/routes'
import useUserContext from '../../hooks/useUserContext'
import useAuth from '../../hooks/useAuth'

export default function Header() {
  const [modalRegister, OpenModalRegister, CloseModalRegister] = useModal()
  const [modalSignIn, OpenModalSignIn, CloseModalSignIn] = useModal()
  const { logout } = useAuth()
  const { user, isLogged } = useUserContext()
  const router = useRouter()

  async function handleSignOut() {
    const loggouted = logout()
    if (loggouted) {
      await router.push(routes.home)
    }
  }

  return (
    <C.Background>
      <C.Container>
        <Link href={routes.home} passHref>
          {
            <a>
              <Logo />
            </a>
          }
        </Link>
        <C.Nav>
          {isLogged() ? (
            <C.NavList>
              <C.NavItem>
                <Button path={routes.deSeuFeedback} color="white">
                  Dê seu Feedback!
                </Button>
                <Button path={routes.feedbacks} color="white">
                  Feedbacks
                </Button>
                <Button
                  onClick={handleSignOut}
                  background="white"
                  color="primary"
                >
                  {`${user?.name ?? ''} (sair)`}
                </Button>
              </C.NavItem>
            </C.NavList>
          ) : (
            <React.Fragment>
              {modalRegister && <FormRegister Close={CloseModalRegister} />}
              {modalSignIn && <FormSignIn Close={CloseModalSignIn} />}
              <C.NavList>
                <C.NavItem>
                  <Button onClick={OpenModalRegister} color="white">
                    Crie uma conta
                  </Button>
                </C.NavItem>
                <C.NavItem>
                  <Button
                    onClick={OpenModalSignIn}
                    color="primary"
                    background="white"
                  >
                    Entrar
                  </Button>
                </C.NavItem>
              </C.NavList>
            </React.Fragment>
          )}
        </C.Nav>
      </C.Container>
    </C.Background>
  )
}
