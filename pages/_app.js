import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { SessionProvider } from "next-auth/react"

const theme = extendTheme({
  // fonts: {
  //   heading: `'Alfa Slab One', alfa-slab-one`,
  //   body: `'Alfa Slab One', alfa-slab-one`,
  // },
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
        <Component { ...pageProps } />
      </ChakraProvider>
    </SessionProvider>
  );
};

export default MyApp
