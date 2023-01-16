import React, { useContext } from 'react';

import { DigimonContext } from '../../pages';
import { HatchingEgg } from '../movingSprites/HatchingEgg';
import { Walking } from '../movingSprites/Walking';

import {
  Flex
} from '@chakra-ui/react';

export const MainScreen = () => {
  const { myPet } = useContext( DigimonContext );

  if( myPet ) {
    return (
      <Flex
        direction='column'
        width='100%'
      >
        {
          myPet.digimonData.stage === 'Digitama' ? <HatchingEgg />
          : <Walking />
        }
      </Flex>
    );
  }
};