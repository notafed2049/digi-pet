import React from 'react';
import { DateTime } from 'luxon';

import { StatPara } from './StatPara';

import {
  Grid,
  Flex
} from '@chakra-ui/react';

export const Stats = ({ digimon }) => {
  const returnAge = () => {
    const birthday = DateTime.fromISO( digimon.birthday );
    const today = DateTime.fromJSDate( new Date() );

    const age = today.diff( birthday, 'hours');
    return Math.trunc( age.toObject().hours );
  };

  return(
    <Flex
      padding='10px'
      direction='column'
      backgroundColor={ digimon.digimonData.bgTheme }
      border='5px double'
      borderRadius='5px'
      borderColor={ digimon.digimonData.borderTheme }
    >
      <Grid
        templateColumns='repeat(2, 1fr)'
        gap='5px'
      >
        <StatPara 
          para={ `HP: ${ digimon.digimonData.HP ? digimon.digimonData.HP : 0 }` }
          cTheme={ digimon.digimonData.borderTheme }
        />
        <StatPara 
          para={ `AP: ${ digimon.digimonData.AP ? digimon.digimonData.AP : 0 }` }
          cTheme={ digimon.digimonData.borderTheme }
        />
        <StatPara 
          para={ `DP: ${ digimon.digimonData.DP ? digimon.digimonData.DP : 0 }` }
          cTheme={ digimon.digimonData.borderTheme }
        />
        <StatPara 
          para={ `Effort: ${ digimon.effort }` }
          cTheme={ digimon.digimonData.borderTheme }
        />
        <StatPara 
          para={ `Battles: ${ digimon.battles }` }
          cTheme={ digimon.digimonData.borderTheme }
        />
        <StatPara 
          para={ `Win %: ${ ( digimon.battles/100 ) * digimon.battlesWon } %` }
          cTheme={ digimon.digimonData.borderTheme }
        />
        <StatPara 
          para={ `Age: ${ returnAge() } HOURS` }
          cTheme={ digimon.digimonData.borderTheme }
          alignSelf='center'
        />
        <StatPara 
          para={ `Weight: ${ digimon.digimonData.weight } G` }
          cTheme={ digimon.digimonData.borderTheme }
          alignSelf='center'
        />
      </Grid>
      <Grid
        gap='5px'
        marginTop='5px'
        alignSelf='center'
      >
        <StatPara 
          para={ `Stage: ${digimon.digimonData.stage}` }
          cTheme={ digimon.digimonData.borderTheme }
        />
      </Grid>
    </Flex>
  )
};