import Header from '../components/header'
import '../styles/globals.css'
import { ChakraProvider, Grid } from '@chakra-ui/react'

export default function App({ Component, pageProps }) {
  return (
  <>
  <ChakraProvider>
  <Grid gap={4} autoFlow="row dense" >
  <Header />
  <Component {...pageProps} />
  </Grid>
  </ChakraProvider>
  </>)
}
