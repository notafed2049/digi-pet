import React from 'react';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';

import { egg } from '../../assets/egg';
import { EvoBtns } from './EvoBtns';

import {
  Flex,
  Grid,
  Button,
  Icon
} from '@chakra-ui/react';

import { FaPoop } from 'react-icons/fa';
import {
  GiPunchingBag,
  GiMeat,
  GiWeightScale,
  GiPunchBlast
} from 'react-icons/gi';

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
      <Grid
        templateColumns='repeat( 2, 1fr )'
        gap='5px'
        marginBottom='10px'
      >
        <Button
          as={ NextLink }
          href='/stats'
          variant='outline'
          colorScheme='gray.400'
          leftIcon={ <Icon as={ GiWeightScale } boxSize='30px' /> }
        >
          Stats
        </Button>
        <Button
          as={ NextLink }
          href='/train'
          variant='outline'
          colorScheme='gray.400'
          leftIcon={ <Icon as={ GiPunchingBag } boxSize='30px' /> }
        >
          Train
        </Button>
        <Button
          as={ NextLink }
          href='/eat'
          variant='outline'
          colorScheme='gray.400'
          leftIcon={ <Icon as={ GiMeat } boxSize='30px' /> }
        >
          Eat
        </Button>
        <Button
          as={ NextLink }
          href='/fight'
          variant='outline'
          colorScheme='gray.400'
          leftIcon={ <Icon as={ GiPunchBlast } boxSize='30px' /> }
        >
          Fight
        </Button>
        <Button
          as={ NextLink }
          href='/train'
          variant='outline'
          colorScheme='gray.400'
          leftIcon={ <Icon as={ FaPoop } boxSize='30px' /> }
        >
          Poop
        </Button>
      </Grid>
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