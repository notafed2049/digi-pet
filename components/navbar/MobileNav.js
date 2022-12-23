import React from 'react';

import {
  Flex,
  Text,
  Button,
  IconButton
} from '@chakra-ui/react';

import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';

export const MobileNav = () => {
  return (
    <Flex
      direction='column'
      width='100%'
    >
      <Flex
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        padding='5px 10px'
      >
        <Text>
          digiPET
        </Text>
        <IconButton
          size='lg'
          // icon={ mobileNavOpen ? <CloseIcon color='red.500' /> : <HamburgerIcon color='red.500' /> }
          icon={ <HamburgerIcon color='red.500' /> }
          backgroundColor='transparent'
        />
      </Flex>
    </Flex>
  );
};