import React from 'react';

import {
  Box,
  keyframes
} from '@chakra-ui/react';

import { motion } from 'framer-motion';

//TODO complete this styling
export const Egg= ({ digitama }) => {

  const hatchingKeyframe = keyframes`
    0% {
      background: url( ${ digitama.sprite }001.png ) no-repeat center/60%;
    }
    10% {
      background: url( ${ digitama.sprite }002.png ) no-repeat center/60%;
    }
    20% {
      background: url( ${ digitama.sprite }001.png ) no-repeat center/60%;
    }
    30% {
      background: url( ${ digitama.sprite }002.png ) no-repeat center/60%;
    }
    40% {
      background: url( ${ digitama.sprite }003.png ) no-repeat center/60%;

    }
    50% {
      background: url( ${ digitama.sprite }004.png ) no-repeat center/60%;

    }
    60% {
      background: url( ${ digitama.sprite }003.png ) no-repeat center/60%;

    }
    70% {
      background: url( ${ digitama.sprite }005.png ) no-repeat center/60%;

    }
    80% {
      background: url( ${ digitama.sprite }006.png ) no-repeat center/60%;

    }
    90% {
      background: url( ${ digitama.sprite }007.png ) no-repeat center/60%;

    }
    100% {
      background: url( ${ digitama.sprite }008.png ) no-repeat center/60%;
    }
  `;

  const animation = `${ hatchingKeyframe } 20s steps(1, start) 1`;

  return (
    <Box
      as={ motion.div }
      width='33vw'
      height='33vw'
      animation={ animation }
    />
  );
};