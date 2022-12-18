import React from 'react';

import {
  Flex,
  Image,
} from '@chakra-ui/react';


//TODO complete this styling
export const Sleep = ({ digimon }) => {
  return (
    <Flex
      direction='column'
      width='33vw'
    >
      <Image
        src='/zzz.gif'
        alt='zzz'
      />
      <Image
        src={ `${ digimon.sprite }sleep.webp` }
        width='100%'
      />
    </Flex>
  );
};