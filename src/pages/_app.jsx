import Header from '../components/header'
import '../styles/globals.css'
import { ChakraProvider, Grid, SimpleGrid, Center } from '@chakra-ui/react'

export default function App({ Component, pageProps }) {
  return (
  <>
  <ChakraProvider>
  <Grid gap={4} autoFlow="row dense" >
    <Header />
    <Center>
      <SimpleGrid columns={3} spacing={4}>
        <Component {...pageProps} />
      </SimpleGrid>
    </Center>
  </Grid>
  </ChakraProvider>
  </>)
}
