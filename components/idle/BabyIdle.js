import React from 'react';

import { 
  Box,
  Flex,
  keyframes
} from '@chakra-ui/react';

import { motion } from 'framer-motion';

//TODO complete this styling
export const BabyIdle = ({ digimon }) => {
  const idleKeyframe = keyframes`
    0% {
      background: url( ${ digimon.sprite }idle1.webp ) no-repeat center/80%;
    }
    33% {
      background: url( ${ digimon.sprite }idle2.webp ) no-repeat center/80%;
    }
    66% {
      background: url( ${ digimon.sprite }idle3.webp ) no-repeat center/80%;
    }
    100% {
      background: url( ${ digimon.sprite }idle4.webp ) no-repeat center/80%;
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

  return (
    <Flex
      minWidth='100vw'
      border='5px double'
      borderColor={ digimon.borderTheme }
      borderRadius='10px'
      backgroundColor={ digimon.bgTheme }
    >
      <Box
        as={ motion.div }
        animation={ animation }
        width='33vw'
        height='33vw'
      />
    </Flex>
  );
};