import React from 'react';

import { 
  Image,
  keyframes
 } from '@chakra-ui/react';

import { motion } from 'framer-motion';

export const DigiPixel = ({ digimon }) => {

  const animationKeyframes = keyframes`
    0% {
      transform: scaleX(1);
    }
    50% {
      transform: scaleX(-1);
    }
    100% {
      transform: scaleX(1);
    }
  `;

  const animation = `${animationKeyframes} 10s steps(1) infinite`;

  return (
    <Image
      as={ motion.img }
      animation={ animation }
      src={ digimon.sprite }
      alt={ digimon.name }
    />
  );
};