import React, { useState } from 'react';

import { Walking } from '../movingSprites/Walking';
import { EatingGIF } from '../movingSprites/Eating';
import { Eating } from '../movingSprites/Eating2';

import {
  Button,
  Flex,
  Grid,
  Text
} from '@chakra-ui/react';

export const EatScreen = ({ digimon }) => {
  const [ eating, setEating ] = useState( false );

  if( digimon ) {
    return(
      <Flex
        direction='column'
      >
        {
          eating ? <Eating petData={ digimon } />
          : <Walking petData={ digimon } />
        }
        <Grid
          templateColumns='repeat( 2 ,1fr )'
          gap='5px'
          marginTop='5px'
        >
          <Button
            onClick={ () => setEating( true ) }
            variant='outline'
            colorScheme='gray.400'
          >
            Eat
          </Button>
          <Button
            onClick={ () => setEating( false ) }
            variant='outline'
            colorScheme='gray.400'
          >
            Finish
          </Button>
        </Grid>
      </Flex>
    );
  }
  
};