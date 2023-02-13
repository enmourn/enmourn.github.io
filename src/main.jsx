import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import '@fontsource/coda/400.css'

const theme = extendTheme({
  styles: {
    global: {
      'body': {
        bg: 'url(/bg.png)',
        fontFamily: `'Coda', sans-serif`
      },
      'h1': {
        color: 'var(--chakra-colors-brand-3)',
        fontSize: '40px!important'
      },
      'h2': {
        color: 'var(--chakra-colors-brand-2)',
        fontSize: '24px!important'
      }
    }
  },
  colors: {
    brand: {
      2: '#58FFC3',
      3: '#FFD058'
    }
  },
  components: {
    Heading: {
      baseStyle: {
        fontFamily: `'Coda', sans-serif`,
        fontWeight: 'normal'
      }
    }
  }
})

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)