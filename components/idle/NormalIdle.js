import React from 'react';

import {
  Box,
  Flex,
  keyframes
} from '@chakra-ui/react';

import { motion } from 'framer-motion';

//TODO complete this styling
export const NormalIdle = ({ digimon }) => {

  const idleKeyframe = keyframes`
    0% {
      background: url( ${ digimon.sprite }idle1.webp ) no-repeat center/100%;
    }
    25% {
      background: url( ${ digimon.sprite }idle2.webp ) no-repeat center/100%;
    }
    50% {
      background: url( ${ digimon.sprite }victory.webp ) no-repeat center/100%;
    }
    75% {
      background: url( ${ digimon.sprite }idle1.webp ) no-repeat center/100%;
    }
    100% {
      background: url( ${ digimon.sprite }idle1.webp ) no-repeat center/100%;
    }
  `;

  const movingKeyframe = keyframes`
    0% {
      transform: scaleX(-1);
      margin-left: 0;
    }
    20% {
      transform: scaleX(-1);
      margin-left: 33vw;
    }
    40% {
      transform: scaleX(-1);
      margin-left: 66vw;
    }

    60% {
      transform: scaleX(1);
      margin-left: 66vw;
    }
    80% {
      transform: scaleX(1);
      margin-left: 33vw;
    }
    100% {
      transform: scaleX(1);
      margin-left: 0;
    }
  `;

  const animation = `
    ${idleKeyframe} 2s steps(1, start) infinite,
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
        width='33vw'
        height='33vw'
        animation={ animation }
      />
    </Flex>
  );
};