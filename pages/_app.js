import { ChakraProvider, extendTheme } from '@chakra-ui/react';

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

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={ theme }>
      <Component { ...pageProps } />
    </ChakraProvider>
  );
};

export default MyApp
