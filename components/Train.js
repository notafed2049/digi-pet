import React from 'react';

import {
  Box,
  keyframes
} from '@chakra-ui/react';

import { motion } from 'framer-motion';

export const Train = ({ digimon }) => {
  const trainKeyframse = keyframes`
    0% {
      background: url(${ digimon.train1 }) no-repeat center/100%;
    }
    33% {
      background: url(${ digimon.train2 }) no-repeat center/100%;
    }
    66% {
      background: url(${ digimon.train1 }) no-repeat center/100%;
    }
    100% {
      background: url(${ digimon.train2 }) no-repeat center/100%;
    }
  `;

  const animation = `${ trainKeyframse } 1s steps(1, start) infinite`;

  return (
    <Box
      as={ motion.div }
      animation={ animation }
      width='33vw'
      height='33vw'
    />
  )
};