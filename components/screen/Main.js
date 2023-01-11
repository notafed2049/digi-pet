import React from 'react';

import { egg } from '../../assets/egg';
import { baby } from '../../assets/baby';
import { child } from '../../assets/child';
import { adult } from '../../assets/adult';
import { perfect } from '../../assets/perfect';
import { ultimate } from '../../assets/ultimate';


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
      {/* {
        egg.map(( element ) => {
          return <HatchingEgg key={ element.type } eggData={ element } />
        })
      } */}
      {/* {
        baby.map(( element ) => {
          return <BabyWalking key={ element.species } babyData={ element } />
        })
      } */}
      {
        child.map(( element ) => {
          return <Walking key={ element.species } digimonData={ element } />
        })
      }
      {
        adult.map(( element ) => {
          return <Walking key={ element.species } digimonData={ element } />
        })
      }
      {
        perfect.map(( element ) => {
          return <Walking key={ element.species } digimonData={ element } />
        })
      }
      {
        ultimate.map(( element ) => {
          return <Walking key={ element.species } digimonData={ element } />
        })
      }
    </Flex>
  );

  // if( pet.digimonData.stage === 'digitama' ) {
  //   return <Egg digitama={ pet } />
  // }
  // if( pet.digimonData.stage === 'baby1' || pet.digimonData.stage === 'baby2' ) {
  //   return <BabyIdle digimon={ pet } />
  // }
  // if( pet.digimonData.stage === 'child' || pet.digimonData.stage === 'adult' || pet.digimonData.stage === 'perfect' || pet.digimonData.stage === 'ultimate' ) {
  //   return <NormalIdle digimon={ pet } />;
  // }
  // return null;
};