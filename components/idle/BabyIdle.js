import React from 'react';

import { 
  Box,
  Flex,
  keyframes
} from '@chakra-ui/react';

import { motion } from 'framer-motion';

export const BabyIdle = ({ digimon }) => {

  const idleKeyframe = keyframes`
    0% {
      background: url(${ digimon.idle1 }) no-repeat center/80%;
    }
    33% {
      background: url(${ digimon.idle2 }) no-repeat center/80%;
    }
    66% {
      background: url(${ digimon.idle3 }) no-repeat center/80%;
    }
    100% {
      background: url(${ digimon.idle4 }) no-repeat center/80%;
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
    ${idleKeyframe} 3s steps(1, start) infinite,
    ${ movingKeyframe } 30s steps(1, start) infinite
  `;

  return (
    <Flex
      minWidth='100vw'
      border='5px double'
      borderColor='red.500'
      borderRadius='10px'
      backgroundColor='red.600'
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