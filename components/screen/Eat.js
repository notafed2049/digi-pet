import React, { useState, useContext } from 'react';

import { DigimonContext } from '../../pages';
import { Walking } from '../movingSprites/Walking';
import { Eating } from '../movingSprites/Eating';

import {
  Button,
  Flex,
  Grid,
  Text
} from '@chakra-ui/react';

export const EatScreen = () => {
  const { myPet } = useContext( DigimonContext )
  const [ eating, setEating ] = useState( false );

  const handleEat = () => {
    setEating( true );

    const timer = setTimeout( () => {
      setEating( false );
    }, 5000 );

    return () => clearTimeout( timer );
  }

  if( myPet ) {
    return(
      <Flex
        direction='column'
      >
        {
          eating ? <Eating />
          : <Walking />
        }
        {
          eating ? 
            <Text
              textAlign='center'
              margin='5px'
            >
              Eating in Progress...
            </Text>
          :
            <Button
              onClick={ () => handleEat() }
              variant='outline'
              colorScheme='gray.400'
              margin='5px'
            >
              Eat
            </Button>
        }
      </Flex>
    );
  }
  
};