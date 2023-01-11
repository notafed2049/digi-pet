import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

import {
  Button,
} from '@chakra-ui/react';

export const EvoBtns = ({ digimon }) => {
  const router = useRouter();

  const babyEvo = async () => {
    try {
      const response = await axios({
        method: 'put',
        url: '/api/digipet/babyEvo',
        withCredentials: true,
        data: {
          digimonId: digimon._id,
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

  const childEvo = async () => {
    try {
      const response = await axios({
        method: 'put',
        url: '/api/digipet/childEvo',
        withCredentials: true,
        data: {
          digimonId: digimon._id,
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

  const adultEvo = async () => {
    try {
      const response = await axios({
        method: 'put',
        url: '/api/digipet/adultEvo',
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

  const perfectEvo = async () => {
    try {
      const response = await axios({
        method: 'put',
        url: '/api/digipet/perfectEvo',
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

  const ultimateEvo = async () => {
    try {
      const response = await axios({
        method: 'put',
        url: '/api/digipet/ultimateEvo',
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
    digimon.digimonData.stage === 'Baby I' ?
      <Button
        onClick={ () => babyEvo() }
        variant='outline'
        colorScheme='red.500'
      >
        Baby 2 Evolution
      </Button>
    : digimon.digimonData.stage === 'Baby II' ?
        <Button
          onClick={ () => childEvo() }
          variant='outline'
          colorScheme='red.500'
        >
          Child Evolution
        </Button>
    : digimon.digimonData.stage === 'Child' ?
        <Button
          onClick={ () => adultEvo() }
          variant='outline'
          colorScheme='red.500'
        >
          Adult Evolution
        </Button>
    : digimon.digimonData.stage === 'Adult' ?
        <Button
          onClick={ () => perfectEvo() }
          variant='outline'
          colorScheme='red.500'
        >
          Perfect Evolution
        </Button>
    : digimon.digimonData.stage === 'Perfect' ?
        <Button
          onClick={ () => ultimateEvo() }
          variant='outline'
          colorScheme='red.500'
        >
          Ultimate Evolution
        </Button>
    : null
  );
};