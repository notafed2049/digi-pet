import React from 'react';

import {
  Flex,
  Grid,
  Button,
  Icon
} from '@chakra-ui/react';

import { FaPoop, FaHome } from 'react-icons/fa';
import {
  GiPunchingBag,
  GiMeat,
  GiWeightScale,
  GiPunchBlast
} from 'react-icons/gi';

export const MainBtns = ({ changeScreen }) => {

  return(
    <Flex
      direction='column'
      justifyContent='center'
      padding='10px'
    >
      <Grid
        templateColumns='repeat( 2, 1fr )'
        gap='5px'
        marginBottom='10px'
      >
        <Button
          onClick={ () => changeScreen( 'main' ) }
          variant='outline'
          colorScheme='gray.400'
          leftIcon={ <Icon as={ FaHome } boxSize='30px' /> }
        >
          Home
        </Button>
        <Button
          onClick={ () => changeScreen( 'stat' ) }
          variant='outline'
          colorScheme='gray.400'
          leftIcon={ <Icon as={ GiWeightScale } boxSize='30px' /> }
        >
          Stats
        </Button>
        <Button
          onClick={ () => changeScreen( 'train' ) }
          variant='outline'
          colorScheme='gray.400'
          leftIcon={ <Icon as={ GiPunchingBag } boxSize='30px' /> }
        >
          Train
        </Button>
        <Button
          onClick={ () => changeScreen( 'eat' ) }
          variant='outline'
          colorScheme='gray.400'
          leftIcon={ <Icon as={ GiMeat } boxSize='30px' /> }
        >
          Eat
        </Button>
        <Button
          onClick={ () => changeScreen( 'poop' ) }
          variant='outline'
          colorScheme='gray.400'
          leftIcon={ <Icon as={ GiPunchBlast } boxSize='30px' /> }
        >
          Fight
        </Button>
        <Button
          variant='outline'
          colorScheme='gray.400'
          leftIcon={ <Icon as={ FaPoop } boxSize='30px' /> }
        >
          Poop
        </Button>
      </Grid>
    </Flex>
  );
};