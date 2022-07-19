import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { StrictMode } from 'react'
import { MoralisProvider } from 'react-moralis'

function MyApp({ Component, pageProps }: AppProps) {
  return <StrictMode>
    <MoralisProvider serverUrl={""} appId={""}>
      <Component {...pageProps} />
    </MoralisProvider>
  </StrictMode>
}

export default MyApp
