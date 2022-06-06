import type { AppProps } from 'next/app';

import { DarkModeProvider } from '@/contexts/DarkModeContext';

import GlobalStyle from '@/components/GlobalStyle';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DarkModeProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </DarkModeProvider>
  );
}

export default MyApp;
