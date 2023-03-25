import '@styles/icon.css';
import '@styles/global.css';

import { AppProps } from 'next/app';
import { Montserrat } from 'next/font/google';
import Head from 'next/head';

import { ThemeContextProvider } from '@context/theme';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export default ({ Component, pageProps }: AppProps) => (
  <ThemeContextProvider>
    <Head>
      <title>Disney + Hotstar</title>
      <meta
        name="description"
        content="Disney + Hotstar - Watch movies, matches and more"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className={montserrat.className}>
      <Component {...pageProps} />
    </main>
  </ThemeContextProvider>
);
