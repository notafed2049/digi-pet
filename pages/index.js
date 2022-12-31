import { useSession } from 'next-auth/react';
import { unstable_getServerSession } from 'next-auth';
import axios from 'axios';
import { useRouter } from 'next/router';

import dbConnect from '../lib/mongooseConnect';
import { authOptions } from './api/auth/[...nextauth]';
import DigiPet from '../model/digipet';

import { egg } from '../assets/egg';

import { MainScreen } from '../components/MainScreen';

import {
  Flex,
  Button,
  Text
} from "@chakra-ui/react"

export default function Home({ myPet }) {
  const { data: session } = useSession();
  const router = useRouter();

  const createDigimon = async () => {
    try {
      const response = await axios({
        method: 'post',
        url: '/api/digipet/create',
        withCredentials: true,
        data: {
          name: 'dummy 001',
          user: session.user.id,
          digimonData: egg[0]
        },
      });
  
      return response.data;
    }
    catch( error ) {
      console.log( error );
    }
    finally {
      // setOpenOptions( false );
      router.replace( router.asPath );
    }
  };

  const deletePet = async () => {
    try {
      const response = await axios({
        method: 'delete',
        url: '/api/digipet/delete',
        withCredentials: true,
        data: {
          digimonId: myPet._id
        },
      });
  
      return response.data;
    }
    catch( error ) {
      console.log( error );
    }
    finally {
      // setOpenOptions( false );
      router.replace( router.asPath );
    }
  };

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

        <Flex
          direction='column'
          justifyContent='center'
          padding='10px'
        >
          <Button
            onClick={ () => createDigimon() }
            variant='outline'
            colorScheme='red.500'
          >
            Create Egg
          </Button>

          <Button
            onClick={ () => deletePet() }
            variant='outline'
            colorScheme='red.500'
          >
            Delete
          </Button>
        </Flex>

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