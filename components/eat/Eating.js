import React from 'react';

import {
  Flex,
  Image,
  Text
} from '@chakra-ui/react';

export const Eating = () => {
  return(
    <Flex
      direction='column'
    >
      <Image
        src='/eating.gif'
        alt='eat'
        border='5px double silver'
        borderRadius='10px'
        margin='10px 20px'
      />
      <Text
        textStyle='digital'
        fontSize='10px'
        textAlign='center'
      >
        Eating in Progress...
      </Text>
    </Flex>
  );
};