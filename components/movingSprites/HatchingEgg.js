import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

import { DigimonContext } from '../../pages';

import {
  Flex,
  Box,
  Button,
  keyframes
} from '@chakra-ui/react';

import { motion } from 'framer-motion';

//TODO complete this styling
export const HatchingEgg = () => {
  const { myPet } = useContext( DigimonContext );
  const router = useRouter();

  const [ showButton, setShowButton ] = useState( false );

  const hatchingKeyframe = keyframes`
    0% {
      background: url( ${ myPet.digimonData.sprite }/001.png ) no-repeat center/60%;
    }
    16.6% {
      background: url( ${ myPet.digimonData.sprite }/002.png ) no-repeat center/60%;
    }
    33.2% {
      background: url( ${ myPet.digimonData.sprite }/003.png ) no-repeat center/60%;

    }
    49.8% {
      background: url( ${ myPet.digimonData.sprite }/004.png ) no-repeat center/60%;

    }
    66.4% {
      background: url( ${ myPet.digimonData.sprite }/005.png ) no-repeat center/60%;

    }
    83% {
      background: url( ${ myPet.digimonData.sprite }/006.png ) no-repeat center/60%;

    }
    99.6% {
      background: url( ${ myPet.digimonData.sprite }/007.png ) no-repeat center/60%;

    }
    100% {
      background: url( ${ myPet.digimonData.sprite }/008.png ) no-repeat center/60%;
    }
  `;

  const animation = `${ hatchingKeyframe } 10s steps(1, start) 1 forwards`;

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
      // setOpenOptions( false );
      router.replace( router.asPath );
    }
  };

  useEffect(() => {
    const timer = setTimeout( () => {
      setShowButton( true );
    }, 10000 );

    return () => clearTimeout( timer );
  }, [])

  return (
    <Flex
      direction='column'
    >
      <Flex
        width='100%'
        border='5px double'
        borderColor='gray.400'
        borderRadius='10px'
        backgroundColor='transparent'
        justifyContent='center'
      >
        <Box
          as={ motion.div }
          width='33vw'
          height='33vw'
          animation={ animation }
        />
      </Flex>
      
      {
        showButton ? 
        <Button
          onClick={ () => babyEvo() }
          variant='outline'
          colorScheme='red.500'
        >
          COMPLETE
        </Button> : null
      }
    </Flex>
  );
};