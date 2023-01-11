import React from 'react';

import { HatchingEgg } from '../movingSprites/HatchingEgg';
import { BabyWalking } from '../movingSprites/BabyWalking';
import { Walking } from '../movingSprites/Walking';

import {
  Flex
} from '@chakra-ui/react';

export const MainScreen = ({ digimon }) => {

  return (
    <Flex
      direction='column'
      width='100%'
    >
      {
        !digimon ? null
        : digimon.digimonData.stage === 'Digitama' ? <HatchingEgg petData={ digimon } />
        : digimon.digimonData.stage === 'Baby I' ? <BabyWalking petData={ digimon } />
        : digimon.digimonData.stage === 'Baby II' ? <BabyWalking petData={ digimon } />
        : <Walking petData={ digimon } />
      }
    </Flex>
  );
};