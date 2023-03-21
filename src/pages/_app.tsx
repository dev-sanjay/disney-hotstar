import { AppProps } from 'next/app';
import Head from 'next/head';

import { ThemeContextProvider } from '@context/theme';

export default ({ Component, pageProps }: AppProps) => (
  <ThemeContextProvider>
    <Head>
      <title>Disney + Hotstar</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} />
  </ThemeContextProvider>
);
