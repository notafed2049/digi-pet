import React from 'react';

import { Egg } from './idle/Egg';
import { BabyIdle } from './idle/BabyIdle';
import { NormalIdle } from './idle/NormalIdle';

export const MainScreen = ({ pet }) => {
  if( pet.stage === 'digitama' ) {
    return <Egg digitama={ pet } />
  }
  if( pet.stage === 'baby1' || pet.stage === 'baby2' ) {
    return <BabyIdle digimon={ pet } />
  }
  if( pet.stage === 'child' || pet.stage === 'adult' || pet.stage === 'perfect' || pet.stage === 'ultimate' ) {
    return <NormalIdle digimon={ pet } />;
  }
  return null;
};