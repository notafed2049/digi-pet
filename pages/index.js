import { useSession } from 'next-auth/react';
import { unstable_getServerSession } from 'next-auth';
import axios from 'axios';
import { useRouter } from 'next/router';

import dbConnect from '../lib/mongooseConnect';
import { authOptions } from './api/auth/[...nextauth]';
import DigiPet from '../model/digipet';

import { MainScreen } from '../components/MainScreen';
import { MainBtns } from '../components/homeBtns/MainBtns';

import {
  Flex,
  Button,
  Text
} from "@chakra-ui/react"

export default function Home({ myPet }) {
  const { data: session } = useSession();
  const router = useRouter();

  if( session ) {

    return (
      <Flex
        direction='column'
      >
        <Text>Pet</Text>
        {
          myPet ? <MainScreen pet={ myPet } />
          : null
        }

        <MainBtns digimon={ myPet } />

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