import React, { useContext } from 'react';
import { DateTime } from 'luxon';

import { DigimonContext } from '../../pages';
import { Walking } from '../movingSprites/Walking';

import {
  Flex,
  Grid,
  Text
} from '@chakra-ui/react';

export const StatScreen = () => {
  const { myPet } = useContext( DigimonContext );
  const returnAge = () => {
    const birthday = DateTime.fromISO( myPet.birthday );
    const today = DateTime.fromJSDate( new Date() );

    const age = today.diff( birthday, 'hours');
    return Math.trunc( age.toObject().hours );
  };

  if( myPet ) {
    return(
      <Flex
        direction='column'
      >
        <Walking />
        <Flex
          padding='10px'
          direction='column'
          backgroundColor={ myPet.digimonData.bgTheme }
          border='5px double'
          borderRadius='5px'
          borderColor={ myPet.digimonData.borderTheme }
          marginTop='10px'
        >
          <Grid
            templateColumns='repeat(2, 1fr)'
            gap='5px'
          >
            <Text
              textStyle='digital'
              fontSize='10px'
              color={ myPet.digimonData.borderTheme }
            >
              { `Power: ${ myPet.digimonData.power }` }
            </Text>
            <Text
              textStyle='digital'
              fontSize='10px'
              color={ myPet.digimonData.borderTheme }
            >
              { `Effort: ${ myPet.effort }` }
            </Text>
            <Text
              textStyle='digital'
              fontSize='10px'
              color={ myPet.digimonData.borderTheme }
            >
              { `Battles: ${ myPet.battles }` }
            </Text>
            <Text
              textStyle='digital'
              fontSize='10px'
              color={ myPet.digimonData.borderTheme }
            >
              { `Win %: ${ ( myPet.battles/100 ) * myPet.battlesWon } %` }
            </Text>
          </Grid>
          <Grid
            gap='5px'
            marginTop='5px'
          >
            <Text
              textStyle='digital'
              fontSize='10px'
              color={ myPet.digimonData.borderTheme }
            >
              { `Age: ${ returnAge() } HOURS` }
            </Text>
            <Text
              textStyle='digital'
              fontSize='10px'
              color={ myPet.digimonData.borderTheme }
            >
              { `Weight: ${ myPet.digimonData.weight } G` }
            </Text>
            <Text
              textStyle='digital'
              fontSize='10px'
              color={ myPet.digimonData.borderTheme }
            >
              { `Stage: ${myPet.digimonData.stage}` }
            </Text>
          </Grid>
        </Flex>
      </Flex>
    );
  }
  
};