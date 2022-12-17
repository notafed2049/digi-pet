import React from 'react';

import { 
  Box,
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

  const skewKeyframe = keyframes`
    0% {
      transform: scaleX(1);
    }
    33% {
      transform: scaleX(-1);
    }
    66% {
      transform: scaleX(1);
    }
    100% {
      transform: scaleX(-1);
    }
  `;

  const animation = `
    ${idleKeyframe} 2s steps(1, start) infinite,
    ${ skewKeyframe } 10s steps(1, start) infinite alternate
  `;

  return (
    <Box
      as={ motion.div }
      width='100px'
      height='100px'
      animation={ animation }
      border='5px double'
      borderColor='red.500'
    />
  );
};