import React from 'react';
import { DateTime } from 'luxon';

import { HatchingEgg } from '../movingSprites/HatchingEgg';
import { BabyWalking } from '../movingSprites/BabyWalking';
import { Walking } from '../movingSprites/Walking';

import {
  Flex,
  Grid,
  Text
} from '@chakra-ui/react';

export const StatScreen = ({ digimon }) => {
  const returnAge = () => {
    const birthday = DateTime.fromISO( digimon.birthday );
    const today = DateTime.fromJSDate( new Date() );

    const age = today.diff( birthday, 'hours');
    return Math.trunc( age.toObject().hours );
  };

  if( digimon ) {
    return(
      <Flex
        direction='column'
      >
        {
          !digimon ? null
          : digimon.digimonData.stage === 'Digitama' ? <HatchingEgg petData={ digimon } />
          : digimon.digimonData.stage === 'Baby I' ? <BabyWalking petData={ digimon } />
          : digimon.digimonData.stage === 'Baby II' ? <BabyWalking petData={ digimon } />
          : <Walking petData={ digimon } />
        }
        <Flex
          padding='10px'
          direction='column'
          backgroundColor={ digimon.digimonData.bgTheme }
          border='5px double'
          borderRadius='5px'
          borderColor={ digimon.digimonData.borderTheme }
          marginTop='10px'
        >
          <Grid
            templateColumns='repeat(2, 1fr)'
            gap='5px'
          >
            <Text
              textStyle='digital'
              fontSize='10px'
              color={ digimon.digimonData.borderTheme }
            >
              { `HP: ${ digimon.digimonData.HP ? digimon.digimonData.HP : 0 }` }
            </Text>
            <Text
              textStyle='digital'
              fontSize='10px'
              color={ digimon.digimonData.borderTheme }
            >
              { `AP: ${ digimon.digimonData.AP ? digimon.digimonData.AP : 0 }` }
            </Text>
            <Text
              textStyle='digital'
              fontSize='10px'
              color={ digimon.digimonData.borderTheme }
            >
              { `DP: ${ digimon.digimonData.DP ? digimon.digimonData.DP : 0 }` }
            </Text>
            <Text
              textStyle='digital'
              fontSize='10px'
              color={ digimon.digimonData.borderTheme }
            >
              { `Effort: ${ digimon.effort }` }
            </Text>
            <Text
              textStyle='digital'
              fontSize='10px'
              color={ digimon.digimonData.borderTheme }
            >
              { `Battles: ${ digimon.battles }` }
            </Text>
            <Text
              textStyle='digital'
              fontSize='10px'
              color={ digimon.digimonData.borderTheme }
            >
              { `Win %: ${ ( digimon.battles/100 ) * digimon.battlesWon } %` }
            </Text>
          </Grid>
          <Grid
            gap='5px'
            marginTop='5px'
            alignSelf='center'
          >
            <Text
              textStyle='digital'
              fontSize='10px'
              color={ digimon.digimonData.borderTheme }
            >
              { `Age: ${ returnAge() } HOURS` }
            </Text>
            <Text
              textStyle='digital'
              fontSize='10px'
              color={ digimon.digimonData.borderTheme }
            >
              { `Weight: ${ digimon.digimonData.weight } G` }
            </Text>
            <Text
              textStyle='digital'
              fontSize='10px'
              color={ digimon.digimonData.borderTheme }
            >
              { `Stage: ${digimon.digimonData.stage}` }
            </Text>
          </Grid>
        </Flex>
      </Flex>
    );
  }
  
};