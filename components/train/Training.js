import React from 'react';

import {
  Flex,
  Box,
  Button,
  keyframes
} from '@chakra-ui/react';

import { motion } from 'framer-motion';

//TODO complete this styling
export const Training = ({ digimon, state, setState }) => {
  const trainKeyframes = keyframes`
    0%, 66% {
      background: url( ${ digimon.digimonData.sprite }train1.webp ) no-repeat center/100%;
    }
    33%, 100% {
      background: url( ${ digimon.digimonData.sprite }train2.webp ) no-repeat center/100%;
    }
  `;

  const trainingAnimation = `${ trainKeyframes } 1s steps(1, start) infinite`;

  const idleKeyframes = keyframes`
    0%, 66% {
      transform: scaleX(-1);
      background: url( ${ digimon.digimonData.sprite }idle.webp ) no-repeat center/100%;
    }
    33%, 100% {
      transform: scaleX(1);
      background: url( ${ digimon.digimonData.sprite }idle.webp ) no-repeat center/100%;
    }
  `;

  const idleAnimation = `${ idleKeyframes } 3s steps(1, start) infinite`;

  const victoryKeyframes = keyframes`
    0%, 66% {
      background: url( ${ digimon.digimonData.sprite }idle.webp ) no-repeat center/100%;
    }
    33%, 100% {
      background: url( ${ digimon.digimonData.sprite }victory.webp ) no-repeat center/100%;
    }
  `;

  const victoryAnimation = `${ victoryKeyframes } 2s steps(1, start) infinite`;

  return (
    <Flex
      minWidth='100vw'
      direction='column'
    >
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
          animation={
            state === 'idle' ? idleAnimation
            : state === 'training' ? trainingAnimation
            : state === 'victory' ? victoryAnimation
            : null
          }
        />
      </Flex>
      <Button
        onClick={ () => setState( 'idle' ) }
        variant='outline'
      >
        Idle
      </Button>
      <Button
        onClick={ () => setState( 'training' ) }
        variant='outline'
      >
        Training
      </Button>
      <Button
        onClick={ () => setState( 'victory' ) }
        variant='outline'
      >
        Complete
      </Button>
    </Flex>
  )
};