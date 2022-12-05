import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'

import theme from '../theme/idnex'
import '../theme/styles.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
