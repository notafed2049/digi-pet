import { useSession, signOut } from 'next-auth/react';
import { unstable_getServerSession } from 'next-auth';
import axios from 'axios';
import { useRouter } from 'next/router';

import dbConnect from '../lib/mongooseConnect';
import { authOptions } from './api/auth/[...nextauth]';
import DigiPet from '../model/digipet';

import { egg } from '../assets/egg';
import { baby } from "../assets/baby";
import { child } from '../assets/child';
import { adult } from "../assets/adult";
import { perfect } from "../assets/perfect";
import { ultimate } from "../assets/ultimate";

import { MainScreen } from '../components/MainScreen';
import { Train } from "../components/Train";
import { Fight } from "../components/Fight";
import { Sleep } from "../components/Sleep";

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
      console.log( 'success' );
      // setOpenOptions( false );
      router.replace( router.asPath );
    }
  };

  const baby1Evo = async () => {
    try {
      const response = await axios({
        method: 'put',
        url: '/api/digipet/baby1Evo',
        withCredentials: true,
        data: {
          digimonId: myPet._id,
          digimonData: baby[0]
        },
      });
  
      return response.data;
    }
    catch( error ) {
      console.log( error );
    }
    finally {
      console.log( 'success' );
      // setOpenOptions( false );
      router.replace( router.asPath );
    }
  };

  const baby2Evo = async () => {
    try {
      const response = await axios({
        method: 'put',
        url: '/api/digipet/baby2Evo',
        withCredentials: true,
        data: {
          digimonId: myPet._id,
          digimonData: baby[1]
        },
      });
  
      return response.data;
    }
    catch( error ) {
      console.log( error );
    }
    finally {
      console.log( 'success' );
      // setOpenOptions( false );
      router.replace( router.asPath );
    }
  };

  const childEvo = async () => {
    try {
      const response = await axios({
        method: 'put',
        url: '/api/digipet/childEvo',
        withCredentials: true,
        data: {
          digimonId: myPet._id,
          digimonData: child[0]
        },
      });
  
      return response.data;
    }
    catch( error ) {
      console.log( error );
    }
    finally {
      console.log( 'success' );
      // setOpenOptions( false );
      router.replace( router.asPath );
    }
  };

  const adultEvo = async () => {
    try {
      const response = await axios({
        method: 'put',
        url: '/api/digipet/adultEvo',
        withCredentials: true,
        data: {
          digimonId: myPet._id,
          digimonData: adult[0]
        },
      });
  
      return response.data;
    }
    catch( error ) {
      console.log( error );
    }
    finally {
      console.log( 'success' );
      // setOpenOptions( false );
      router.replace( router.asPath );
    }
  };

  const perfectEvo = async () => {
    try {
      const response = await axios({
        method: 'put',
        url: '/api/digipet/perfectEvo',
        withCredentials: true,
        data: {
          digimonId: myPet._id,
          digimonData: perfect[0]
        },
      });
  
      return response.data;
    }
    catch( error ) {
      console.log( error );
    }
    finally {
      console.log( 'success' );
      // setOpenOptions( false );
      router.replace( router.asPath );
    }
  };

  const ultimateEvo = async () => {
    try {
      const response = await axios({
        method: 'put',
        url: '/api/digipet/ultimateEvo',
        withCredentials: true,
        data: {
          digimonId: myPet._id,
          digimonData: ultimate[0]
        },
      });
  
      return response.data;
    }
    catch( error ) {
      console.log( error );
    }
    finally {
      console.log( 'success' );
      // setOpenOptions( false );
      router.replace( router.asPath );
    }
  };

  if( session ) {
    // console.log(session.user.id );
    // console.log({ myPet });

    return (
      <Flex
        direction='column'
      >
        <Text>
          Signed in as { session.user.email }
        </Text>
        <Button
          onClick={ () => signOut({ callbackUrl: '/login' }) }
          variant='outline'
          colorScheme='red.500'
        >
          Sign Out
        </Button>
        <Text>Pet</Text>
        {
          myPet ? <MainScreen pet={ myPet.digimonData } />
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
            onClick={ () => baby1Evo() }
            variant='outline'
            colorScheme='red.500'
          >
            Baby 1 Evolution
          </Button>

          <Button
            onClick={ () => baby2Evo() }
            variant='outline'
            colorScheme='red.500'
          >
            Baby 2 Evolution
          </Button>

          <Button
            onClick={ () => childEvo() }
            variant='outline'
            colorScheme='red.500'
          >
            Child Evolution
          </Button>

          <Button
            onClick={ () => adultEvo() }
            variant='outline'
            colorScheme='red.500'
          >
            Adult Evolution
          </Button>

          <Button
            onClick={ () => perfectEvo() }
            variant='outline'
            colorScheme='red.500'
          >
            Perfect Evolution
          </Button>

          <Button
            onClick={ () => ultimateEvo() }
            variant='outline'
            colorScheme='red.500'
          >
            Ultimate Evolution
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