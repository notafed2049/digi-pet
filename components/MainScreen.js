import React from 'react';

import { Egg } from './idle/Egg';
import { BabyIdle } from './idle/BabyIdle';
import { NormalIdle } from './idle/NormalIdle';

export const MainScreen = ({ pet }) => {

  if( pet.digimonData.stage === 'digitama' ) {
    return <Egg digitama={ pet } />
  }
  if( pet.digimonData.stage === 'baby1' || pet.digimonData.stage === 'baby2' ) {
    return <BabyIdle digimon={ pet } />
  }
  if( pet.digimonData.stage === 'child' || pet.digimonData.stage === 'adult' || pet.digimonData.stage === 'perfect' || pet.digimonData.stage === 'ultimate' ) {
    return <NormalIdle digimon={ pet } />;
  }
  return null;
};