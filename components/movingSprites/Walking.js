import React from 'react';

import {
  Image,
  Box,
  Flex,
  keyframes
} from '@chakra-ui/react';

import { motion } from 'framer-motion';

//TODO complete this styling
export const Walking = ({ digimonData }) => {
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
      margin-left: 60vw;
    }

    60% {
      transform: scaleX(1);
      margin-left: 60vw;
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

  const animation = `${ movingKeyframe } 35s steps(1, start) infinite`;

  return (
    <Flex
      minWidth='100vw'
      direction='column'
    >
      <Flex
        width='100%'
        border='5px double'
        borderColor={ digimonData.borderTheme }
        borderRadius='10px'
        backgroundColor={ digimonData.bgTheme }
      >
        <Image
          as={ motion.img }
          animation={ animation }
          src={ `${ digimonData.sprite }walking.gif` }
          alt={ digimonData.species }
          width='33vw'
          height='33vw'
          padding='10px'
        />
      </Flex>
    </Flex>
  );
};