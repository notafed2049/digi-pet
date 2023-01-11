import { useSession } from 'next-auth/react';
import { unstable_getServerSession } from 'next-auth';
import { useState } from 'react';

import dbConnect from '../lib/mongooseConnect';
import { authOptions } from './api/auth/[...nextauth]';
import DigiPet from '../model/digipet';

import { MainScreen } from '../components/screen/Main';
import { StatScreen } from '../components/screen/Stats';

import { MainBtns } from '../components/navBtns/MainBtns';
import { CreateDeleteBtn } from '../components/navBtns/CreateDelete';

import {
  Flex,
  Button,
  Text
} from "@chakra-ui/react"

export default function Home({ myPet }) {
  const { data: session } = useSession();

//This state controls what content to show the users
//example: 'main' shows main screen, 'train' shows training screen, 'stat' shows status screen
  const [ pageState, setPageState ] = useState( 'main' );

  if( session ) {

    return (
      <Flex
        direction='column'
        marginTop='10px'
      >

        {
          pageState === 'main' ? <MainScreen digimon={ myPet } />
          : pageState === 'stat' ? <StatScreen digimon={ myPet } />
          : null
        }

        {
          myPet ? <MainBtns changeScreen={ setPageState } />
          : null
        }

        <CreateDeleteBtn digimon={ myPet } />

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