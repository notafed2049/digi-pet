import React, { useContext } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

import { DigimonContext } from '../../pages';

import {
  Button,
} from '@chakra-ui/react';

export const EvoBtns = () => {
  const { myPet } = useContext( DigimonContext )
  const router = useRouter();

  const babyEvo = async () => {
    try {
      const response = await axios({
        method: 'put',
        url: '/api/digipet/babyEvo',
        withCredentials: true,
        data: {
          digimonId: myPet._id,
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
          digimonId: myPet._id,
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
          digimonId: myPet._id
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
          digimonId: myPet._id
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
          digimonId: myPet._id
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
    myPet.digimonData.stage === 'Baby I' ?
      <Button
        onClick={ () => babyEvo() }
        variant='outline'
        colorScheme='red.500'
      >
        Baby 2 Evolution
      </Button>
    : myPet.digimonData.stage === 'Baby II' ?
        <Button
          onClick={ () => childEvo() }
          variant='outline'
          colorScheme='red.500'
        >
          Child Evolution
        </Button>
    : myPet.digimonData.stage === 'Child' ?
        <Button
          onClick={ () => adultEvo() }
          variant='outline'
          colorScheme='red.500'
        >
          Adult Evolution
        </Button>
    : myPet.digimonData.stage === 'Adult' ?
        <Button
          onClick={ () => perfectEvo() }
          variant='outline'
          colorScheme='red.500'
        >
          Perfect Evolution
        </Button>
    : myPet.digimonData.stage === 'Perfect' ?
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