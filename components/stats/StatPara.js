import React from 'react';

import { Text } from '@chakra-ui/react';

export const StatPara = ({ para, cTheme }) => {
  return(
    <Text
      textStyle='digital'
      fontSize='10px'
      color={ cTheme }
    >
      { para }
    </Text>
  );
};