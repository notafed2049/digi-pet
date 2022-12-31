import React from 'react';
import { DateTime } from 'luxon';

import {
  Grid,
  Flex,
  Text
} from '@chakra-ui/react';

export const Stats = ({ digimon }) => {
  const returnAge = () => {
    const birthday = DateTime.fromISO( digimon.birthday );
    const today = DateTime.fromJSDate( new Date() );

    const age = today.diff( birthday, 'hours');
    return Math.trunc( age.toObject().hours );
  };

  return(
    <Grid
      templateColumns='repeat(2, 1fr)'
      padding='10px'
      gap='5px'
      backgroundColor={ digimon.digimonData.bgTheme }
      border='5px double'
      borderRadius='5px'
      borderColor={ digimon.digimonData.borderTheme }
    >
      <Text 
        textStyle='digital'
        fontSize='10px'
        color={ digimon.digimonData.borderTheme }
      >
        { `HP: ${digimon.digimonData.HP}` }
      </Text>
      <Text 
        textStyle='digital'
        fontSize='10px'
        color={ digimon.digimonData.borderTheme }
      >
        { `AP: ${digimon.digimonData.AP}` }
      </Text>
      <Text 
        textStyle='digital'
        fontSize='10px'
        color={ digimon.digimonData.borderTheme }
      >
        { `DP: ${digimon.digimonData.DP}` }
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
        { `Stage: ${digimon.digimonData.stage}` }
      </Text>
    </Grid>
  )
};