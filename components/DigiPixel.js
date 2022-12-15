import React from 'react';

import { 
  Box,
  Image,
  keyframes
 } from '@chakra-ui/react';

import { motion } from 'framer-motion';

export const DigiPixel = ({ digimon }) => {
  const digimonIdleKeyframes = keyframes`
    from { 
      background: no-repeat center/100% url( ${ digimon.sprite1 } ); 
    }
	  to { 
      background: no-repeat center/100% url( ${ digimon.sprite2 } ); 
    }

  `

  const digimonIdleAnimation = `${ digimonIdleKeyframes } 0.35s infinite alternate`;

  return (
    <Box
      as={ motion.div }
      animation={ digimonIdleAnimation }
      width='100px'
      height='100px'
      border='1px solid'
      borderColor='red.500'
    />
  );
};