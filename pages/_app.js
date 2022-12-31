import '@fontsource/patua-one';
import '@fontsource/press-start-2p';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { SessionProvider } from "next-auth/react"

import { Layout } from '../components/Layout';

const theme = extendTheme({
  fonts: {
    body: `"Patua One", cursive`,
  },
  textStyles: {
    digital: {
      fontFamily: `"Press Start 2P", cursive`
    }
  },
  styles: {
    global: {
      'html, body': {
        backgroundColor: 'gray.700',
        color: 'red.500'
      }
    }
  }
});

function MyApp({ Component,
  pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={ session } >
      <ChakraProvider theme={ theme }>
        <Layout>
          <Component { ...pageProps } />
        </Layout>
      </ChakraProvider>
    </SessionProvider>
  );
};

export default MyApp
