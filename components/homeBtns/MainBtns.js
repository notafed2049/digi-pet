import React from 'react';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

import { egg } from '../../assets/egg';
import { EvoBtns } from './EvoBtns';

import {
  Flex,
  Button
} from '@chakra-ui/react';

export const MainBtns = ({ digimon }) => {
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
          digimonId: digimon._id
        },
      });
  
      return response.data;
    }
    catch( error ) {
      console.log( error );
    }
    finally {
      router.replace( router.asPath );
    }
  };

  return(
    <Flex
      direction='column'
      justifyContent='center'
      padding='10px'
    >
      {
        digimon ?
          <Flex
            direction='column'
            width='100%'
          >
            <EvoBtns digimon={ digimon } />
            <Button
              onClick={ () => deletePet() }
              variant='outline'
              colorScheme='red.500'
            >
              Delete
            </Button>
          </Flex>
        :  <Button
            onClick={ () => createDigimon() }
            variant='outline'
            colorScheme='red.500'
          >
            Create Egg
          </Button>
      }
    </Flex>
  );
};