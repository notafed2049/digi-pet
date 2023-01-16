import { createContext } from 'react';
import { useSession } from 'next-auth/react';
import { unstable_getServerSession } from 'next-auth';
import { useState } from 'react';

import dbConnect from '../lib/mongooseConnect';
import { authOptions } from './api/auth/[...nextauth]';
import DigiPet from '../model/digipet';

import { MainScreen } from '../components/screen/Main';
import { StatScreen } from '../components/screen/Stats';
import { EatScreen } from '../components/screen/Eat';

import { MainBtns } from '../components/navBtns/MainBtns';
import { CreateDeleteBtn } from '../components/navBtns/CreateDelete';

import {
  Flex,
  Button
} from "@chakra-ui/react"

export const DigimonContext = createContext( null );

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
        <DigimonContext.Provider value={{ myPet, setPageState }}>

          {
            pageState === 'main' ? <MainScreen />
            : pageState === 'stat' ? <StatScreen />
            : pageState === 'eat' ? <EatScreen />
            : <MainScreen />
          }

          {
            myPet ? <MainBtns />
            : null
          }

          {
            pageState === 'main' ? <CreateDeleteBtn />
            : null
          }

          {
            myPet ? 
              <Button
                onClick={ () => console.log({ myPet }) }
                variant='outline'
                colorScheme='gray.400'
              >
                Click Me
              </Button>
            : null
          }

        </DigimonContext.Provider>

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