import { useSession } from 'next-auth/react';
import { unstable_getServerSession } from 'next-auth';
import { useState } from 'react';

import dbConnect from '../lib/mongooseConnect';
import { authOptions } from './api/auth/[...nextauth]';
import DigiPet from '../model/digipet';

import { Eating } from '../components/eat/Eating';
import { Idle } from '../components/eat/Idle';
import { Finish } from '../components/eat/Finish';

import {
  Button,
  Flex,
  Text
} from '@chakra-ui/react';

export default function Home({ myPet }) {
  const { data: session } = useSession();
  const [ eatingState, setEatingState ] = useState( 'idle' ); // idle, eating, complete

  if( session ) {
    return (
      <Flex
        direction='column'
      >
        <Text>Eat</Text>
        {
          eatingState === 'idle' ? <Idle digimon={ myPet } />
          : eatingState === 'complete' ? <Finish digimon={ myPet } />
          : eatingState === 'eating' ? <Eating />
          : null
        }
        <Button
          onClick={ () => setEatingState( 'eating' ) }
          variant='outline'
          borderColor='gray.400'
        >
          Eat
        </Button>
        <Button
          onClick={ () => setEatingState( 'idle' ) }
          variant='outline'
          borderColor='gray.400'
        >
          Idle
        </Button>
        <Button
          onClick={ () => setEatingState( 'complete' ) }
          variant='outline'
          borderColor='gray.400'
        >
          Complete
        </Button>
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