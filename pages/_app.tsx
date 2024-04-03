import type { AppProps } from 'next/app'
import dotenv from 'dotenv';

dotenv.config();

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
