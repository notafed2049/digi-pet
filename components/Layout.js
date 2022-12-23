import React from 'react';

import { Navbar } from './navbar/Navbar';

import {
  Flex
} from '@chakra-ui/react';

export const Layout = ({ children }) => {
  return (
    <Flex
      direction='column'
    >
      <Navbar />
      { children }
    </Flex>
  );
};