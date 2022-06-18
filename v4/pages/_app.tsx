import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '../sass/style.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
