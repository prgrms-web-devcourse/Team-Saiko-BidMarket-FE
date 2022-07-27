import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import type { AppProps } from 'next/app';

import Layout from 'components/Layout';

const theme = extendTheme({
  colors: {
    brand: {
      'primary-900': '#FF4370',
      'primary-500': '#FFDEE6',
      'primary-100': '#FFECF2',
      dark: '#2E2E2E',
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
