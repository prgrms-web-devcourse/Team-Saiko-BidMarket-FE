import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { AppProps } from 'next/app';
import { Router } from 'next/router';
import { useEffect, useState } from 'react';

import { Loading } from 'components/common';
import Layout from 'components/Layout';

const theme = extendTheme({
  colors: {
    brand: {
      'primary-900': '#FF4370',
      'primary-500': '#FFDEE6',
      'primary-100': '#FFECF2',
      dark: '#2E2E2E',
      'dark-light': '#8E8E8E',
    },
  },
});

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const startLoading = () => {
      setIsLoading(true);
    };

    const finishedLoading = () => {
      setIsLoading(false);

    Router.events.on('routeChangeStart', startLoading);
    Router.events.on('routeChangeComplete', finishedLoading);
    Router.events.on('routeChangeError', finishedLoading);

    return () => {
      Router.events.off('routeChangeStart', startLoading);
      Router.events.off('routeChangeComplete', finishedLoading);
      Router.events.off('routeChangeError', finishedLoading);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <Layout>
          {isLoading ? <Loading /> : <Component {...pageProps} />}
        </Layout>
      </ChakraProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;
