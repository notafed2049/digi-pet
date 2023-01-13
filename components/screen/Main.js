import React from 'react';

import { HatchingEgg } from '../movingSprites/HatchingEgg';
import { Walking } from '../movingSprites/Walking';

import {
  Flex
} from '@chakra-ui/react';

export const MainScreen = ({ digimon }) => {

  if( digimon ) {
    return (
      <Flex
        direction='column'
        width='100%'
      >
        {
          digimon.digimonData.stage === 'Digitama' ? <HatchingEgg petData={ digimon } />
          : <Walking petData={ digimon } />
        }
      </Flex>
    );
  }
};