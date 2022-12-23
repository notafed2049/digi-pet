import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

import {
  Box,
  Button,
  Flex,
  keyframes
} from '@chakra-ui/react';

import { motion } from 'framer-motion';

//TODO complete this styling
export const NormalIdle = ({ digimon }) => {
  const router = useRouter();

  const walkingKeyframe = keyframes`
    0% {
      background: url( ${ digimon.digimonData.sprite }walk1.webp ) no-repeat center/100%;
    }
    20% {
      background: url( ${ digimon.digimonData.sprite }walk2.webp ) no-repeat center/100%;
    }

    40% {
      background: url( ${ digimon.digimonData.sprite }walk1.webp ) no-repeat center/100%;
    }
    60% {
      background: url( ${ digimon.digimonData.sprite }walk2.webp ) no-repeat center/100%;
    }

    80% {
      background: url( ${ digimon.digimonData.sprite }walk1.webp ) no-repeat center/100%;
    }
    100% {
      background: url( ${ digimon.digimonData.sprite }walk2.webp ) no-repeat center/100%;
    }
  `;

  const movingKeyframe = keyframes`
    0% {
      transform: scaleX(-1);
      margin-left: 0;
    }
    10% {
      transform: scaleX(-1);
      margin-left: 16.5vw;
    }
    20% {
      transform: scaleX(-1);
      margin-left: 33vw;
    }
    30% {
      transform: scaleX(-1);
      margin-left: 49.5vw;
    }
    40% {
      transform: scaleX(-1);
      margin-left: 66vw;
    }

    60% {
      transform: scaleX(1);
      margin-left: 66vw;
    }
    70% {
      transform: scaleX(1);
      margin-left: 49.5vw;
    }
    80% {
      transform: scaleX(1);
      margin-left: 33vw;
    }
    90% {
      transform: scaleX(1);
      margin-left: 16.5vw;
    }
    100% {
      transform: scaleX(1);
      margin-left: 0;
    }
  `;

  const animation = `
    ${walkingKeyframe} 5s steps(1, start) infinite,
    ${ movingKeyframe } 35s steps(1, start) infinite
  `;

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
          digimonId: digimon._id
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
      // setOpenOptions( false );
      router.replace( router.asPath );
    }
  };

  return (
    <Flex
      minWidth='100vw'
      direction='column'
    >
      <Flex
        width='100%'
        border='5px double'
        borderColor={ digimon.digimonData.borderTheme }
        borderRadius='10px'
        backgroundColor={ digimon.digimonData.bgTheme }
      >
        <Box
          as={ motion.div }
          width='33vw'
          height='33vw'
          animation={ animation }
        />
      </Flex>
      {
        digimon.digimonData.stage === 'child' ?
          <Button
            onClick={ () => adultEvo() }
            variant='outline'
            colorScheme='red.500'
          >
            Adult Evolution
          </Button>
        : digimon.digimonData.stage === 'adult' ?
          <Button
            onClick={ () => perfectEvo() }
            variant='outline'
            colorScheme='red.500'
          >
            Perfect Evolution
          </Button>
        : digimon.digimonData.stage === 'perfect' ?
          <Button
            onClick={ () => ultimateEvo() }
            variant='outline'
            colorScheme='red.500'
          >
            Ultimate Evolution
          </Button>
        : null
      }
    </Flex>
  );
};