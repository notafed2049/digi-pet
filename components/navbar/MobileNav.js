import React, { useState } from 'react';
import { signOut } from 'next-auth/react';
import NextLink from 'next/link';

import {
  Flex,
  Button,
  IconButton,
  Icon,
  Grid
} from '@chakra-ui/react';

import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';

import { MdLogout } from 'react-icons/md';

export const MobileNav = () => {
  const [ navOpen, setNavOpen ] = useState( false );

  const handleOpenNav = () => {
    if( navOpen ) {
      setNavOpen( false );
    }
    else if( !navOpen ) {
      setNavOpen( true );
    }
  };

  return (
    <Flex
      direction='column'
      width='100%'
      borderBottom='1px solid'
      borderColor='gray.400'
    >
      <Flex
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        padding='5px 10px'
      >
        <Button
          as={ NextLink }
          href='/'
          variant='ghost'
          color='gray.400'
        >
          digiPet
        </Button>
        <IconButton
          onClick={ () => handleOpenNav() }
          size='lg'
          icon={ navOpen ? <CloseIcon /> : <HamburgerIcon boxSize='30px' /> }
          variant='outline'
          colorScheme='gray.400'
        />
      </Flex>

      {
        navOpen ?
        <Flex
          padding='5px'
          borderTop='1px solid'
          borderColor='gray.400'
        >
          <Grid
            width='100%'
            templateColumns='repeat( 2, 1fr )'
            gap='5px'
          >
            <Button
              onClick={ () => signOut({ callbackUrl: '/login' }) }
              variant='outline'
              colorScheme='gray.400'
              leftIcon={ <Icon as={ MdLogout } boxSize='30px' /> }
            >
              Logout
            </Button>
          </Grid>
        </Flex>
        : null
      }
    </Flex>
  );
};