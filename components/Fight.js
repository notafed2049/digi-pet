import React from 'react';

import {
  Box,
  keyframes
} from '@chakra-ui/react';

import { motion } from 'framer-motion';

//TODO finish styling this
export const Fight = ({ digimon, scaleX }) => {
  const fightKeyframes = keyframes`
    0% {
      background: url( ${ digimon.sprite }idle1.webp ) no-repeat center/100%;
    }
    25% {
      background: url( ${ digimon.sprite }idle2.webp ) no-repeat center/100%;
    }
    50% {
      background: url( ${ digimon.sprite }fight.webp ) no-repeat center/100%;
    }
    75% {
      background: url( ${ digimon.sprite }idle1.webp ) no-repeat center/100%;
    }
    100% {
      background: url( ${ digimon.sprite }idle1.webp ) no-repeat center/100%;
    }
  `;

  const animation = `${ fightKeyframes } 2s steps(1, start) infinite`;

  return (
    <Box
      as={ motion.div }
      animation={ animation }
      width='33vw'
      height='33vw'
      transform={`scaleX(${ scaleX })`}
    />
  );
};