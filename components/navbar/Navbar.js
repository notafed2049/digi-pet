import React from 'react';
import { useSession } from 'next-auth/react';

import { MobileNav } from './MobileNav';

import {
  Flex
} from '@chakra-ui/react';

export const Navbar = () => {
  const { data: session } = useSession();

  if( session ) {
    return (
      <Flex
      >
        <MobileNav />
      </Flex>
    );
  }
};