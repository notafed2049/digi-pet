import React from 'react';

import { 
  Box,
  keyframes
} from '@chakra-ui/react';

import { motion } from 'framer-motion';

export const NormalIdle = ({ digimon }) => {

  const idleKeyframe = keyframes`
    from {
      background: url(${ digimon.idle1 }) no-repeat center/100%;
    }
    50% {
      background: url(${ digimon.idle2 }) no-repeat center/100%;
    }
    to {
      background: url(${ digimon.victory }) no-repeat center/100%;
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
    ${idleKeyframe} 1s steps(1, start) infinite alternate,
    ${ skewKeyframe } 10s steps(1, start) infinite alternate
  `;
  // const animation = `${idleKeyframe} 2s infinite alternate`;
  // const animation = `${ skewKeyframe } 10s steps(1) infinite alternate`

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