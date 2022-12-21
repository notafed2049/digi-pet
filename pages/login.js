import { signIn, getProviders } from 'next-auth/react';

import {
  Button
} from "@chakra-ui/react";

export default function Login({ providers }) {  
  const providersArray = Object.values( providers );

  return(
    <Button
      onClick={ () => signIn( providersArray[0].id, { callbackUrl: 'https://localhost:3000' }) }
    >
      { providersArray[0].name } Login
    </Button>
  )
};

export async function getServerSideProps( context ) {
  try {
    const providers = await getProviders();

    return {
      props: {
        providers
      },
    }
  }
  catch( error ) {
    console.log( error );
    return {
      notFound: true,
    }
  }
};