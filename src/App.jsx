import { Grid } from '@chakra-ui/react'
import Header from './assets/components/Header'
import Skills from './assets/components/Skills'

function App() {
  return (
    <Grid maxW='1216px' m='0 auto'>
      <Header />
      <Skills />
    </Grid>
  )
}

export default App
