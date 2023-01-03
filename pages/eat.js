import { useSession } from 'next-auth/react';
import { unstable_getServerSession } from 'next-auth';

import dbConnect from '../lib/mongooseConnect';
import { authOptions } from './api/auth/[...nextauth]';
import DigiPet from '../model/digipet';

import {
  Flex,
  Text,
  Image,
} from '@chakra-ui/react';

export default function Home({ myPet }) {
  const { data: session } = useSession();

  if( session ) {
    return (
      <Flex
        direction='column'
      >
        <Text>Eat</Text>
        <Image
          src='/eating.gif'
          alt='eat'
          border='5px double silver'
          borderRadius='10px'
          margin='10px 20px'
        />
        <Text
          textStyle='digital'
          fontSize='10px'
          textAlign='center'
        >
          Eating in Progress...
        </Text>
      </Flex>
    )
  }
}

export async function getServerSideProps( context ) {
  const session = await unstable_getServerSession(context.req, context.res, authOptions);

  if( session ) {
    try {
      await dbConnect();

      const myPet = await DigiPet.findOne({ user: session.user.id });
  
      return {
        props: {
          myPet: JSON.parse( JSON.stringify( myPet )),
        },
      }
    }
    catch( error ) {
      console.log( error );
      return {
        notFound: true,
      }
    }
  }
  else {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }
};