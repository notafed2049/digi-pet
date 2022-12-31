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
    >
      <Text>{ `HP: ${digimon.digimonData.HP}` }</Text>
      <Text>{ `AP: ${digimon.digimonData.AP}` }</Text>
      <Text>{ `DP: ${digimon.digimonData.DP}` }</Text>
      <Text>{ `Stage: ${digimon.digimonData.stage}` }</Text>
      <Text>{ `Age: ${ returnAge() } Hours` }</Text>
      <Text>{ `Battles: ${ digimon.battles }` }</Text>
    </Grid>
  )
};