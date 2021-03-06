import Head from 'next/head'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { FeedbackProvider } from '../contexts/feedback'
import { UserProvider } from '../contexts/user'
import theme from '../theme'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Roboto';
    font-style: normal;
  }
`

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Biryani:wght@800;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <UserProvider>
          <FeedbackProvider>
            <Component {...pageProps} />
          </FeedbackProvider>
        </UserProvider>
      </ThemeProvider>
    </>
  )
}
