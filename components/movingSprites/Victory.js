import React from 'react';

import {
  Flex,
  Box,
  keyframes
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

export const VictorySprite = ({ digimon }) => {
  const victoryKeys = keyframes`
    0%, 66% {
      background: url( ${ digimon.digimonData.sprite }idle.webp ) no-repeat center/100%;
    }
    33%, 100% {
      background: url( ${ digimon.digimonData.sprite }victory.webp ) no-repeat center/100%;
    }
  `;

  const animation = `${ victoryKeys } 2s steps(1, start) infinite`;

  return(
    <Flex
      width='100%'
      border='5px double'
      borderColor={ digimon.digimonData.borderTheme }
      borderRadius='10px'
      backgroundColor={ digimon.digimonData.bgTheme }
      justifyContent='center'
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