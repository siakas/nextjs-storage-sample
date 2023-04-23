import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'
import { RecoilRoot } from 'recoil'
import GlobalStyle from '@/styles/global'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <GlobalStyle />

        <Head>
          <meta name="robots" content="noindex, nofollow" />
        </Head>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </RecoilRoot>
    </>
  )
}
