import type { AppProps } from 'next/app'

import { MoralisProvider } from 'react-moralis'
import { ChakraProvider } from '@chakra-ui/react'

import { theme } from '../styles/theme'

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props
  return (
    <MoralisProvider
      appId={process.env.NEXT_PUBLIC_APP_ID}
      serverUrl={process.env.NEXT_PUBLIC_SERVER_URL}
    >
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </MoralisProvider>
  )
}
