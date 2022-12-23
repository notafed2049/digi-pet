import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

import {
  Flex,
  Box,
  Button,
  keyframes
} from '@chakra-ui/react';

import { motion } from 'framer-motion';

//TODO complete this styling
export const Egg= ({ digitama }) => {
  const router = useRouter();

  const [ showButton, setShowButton ] = useState( false );

  const hatchingKeyframe = keyframes`
    0% {
      background: url( ${ digitama.digimonData.sprite }001.png ) no-repeat center/60%;
    }
    10% {
      background: url( ${ digitama.digimonData.sprite }002.png ) no-repeat center/60%;
    }
    20% {
      background: url( ${ digitama.digimonData.sprite }001.png ) no-repeat center/60%;
    }
    30% {
      background: url( ${ digitama.digimonData.sprite }002.png ) no-repeat center/60%;
    }
    40% {
      background: url( ${ digitama.digimonData.sprite }003.png ) no-repeat center/60%;

    }
    50% {
      background: url( ${ digitama.digimonData.sprite }004.png ) no-repeat center/60%;

    }
    60% {
      background: url( ${ digitama.digimonData.sprite }003.png ) no-repeat center/60%;

    }
    70% {
      background: url( ${ digitama.digimonData.sprite }005.png ) no-repeat center/60%;

    }
    80% {
      background: url( ${ digitama.digimonData.sprite }006.png ) no-repeat center/60%;

    }
    90% {
      background: url( ${ digitama.digimonData.sprite }007.png ) no-repeat center/60%;

    }
    100% {
      background: url( ${ digitama.digimonData.sprite }008.png ) no-repeat center/60%;
    }
  `;

  const animation = `${ hatchingKeyframe } 20s steps(1, start) 1 forwards`;

  const babyEvo = async () => {
    try {
      const response = await axios({
        method: 'put',
        url: '/api/digipet/babyEvo',
        withCredentials: true,
        data: {
          digimonId: digitama._id,
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

  useEffect(() => {
    const timer = setTimeout( () => {
      setShowButton( true );
    }, 20000 );

    return () => clearTimeout( timer );
  }, [])

  return (
    <Flex
      direction='column'
    >
      <Box
        as={ motion.div }
        width='33vw'
        height='33vw'
        animation={ animation }
      />
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