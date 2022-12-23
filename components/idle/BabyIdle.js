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
export const BabyIdle = ({ digimon }) => {
  const router = useRouter();

  const idleKeyframe = keyframes`
    0% {
      background: url( ${ digimon.digimonData.sprite }idle1.webp ) no-repeat center/80%;
    }
    33% {
      background: url( ${ digimon.digimonData.sprite }idle2.webp ) no-repeat center/80%;
    }
    66% {
      background: url( ${ digimon.digimonData.sprite }idle3.webp ) no-repeat center/80%;
    }
    100% {
      background: url( ${ digimon.digimonData.sprite }idle4.webp ) no-repeat center/80%;
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
    ${idleKeyframe} 3s steps(1, start) infinite,
    ${ movingKeyframe } 30s steps(1, start) infinite
  `;

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
          digimonId: digimon._id,
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
      direction='column'
      minWidth='100vw'
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
          animation={ animation }
          width='33vw'
          height='33vw'
        />
      </Flex>
      
      {
        digimon.digimonData.stage === 'baby1' ?
          <Button
            onClick={ () => babyEvo() }
            variant='outline'
            colorScheme='red.500'
          >
            Baby 2 Evolution
          </Button>
        : digimon.digimonData.stage === 'baby2' ?
          <Button
            onClick={ () => childEvo() }
            variant='outline'
            colorScheme='red.500'
          >
            Child Evolution
          </Button>
        : null
      }
    </Flex>
  );
};