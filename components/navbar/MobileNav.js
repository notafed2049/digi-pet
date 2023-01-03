import React, { useState } from 'react';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/router';

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
  const router = useRouter();

  const [ navOpen, setNavOpen ] = useState( false );

  const handleOpenNav = () => {
    if( navOpen ) {
      setNavOpen( false );
    }
    else if( !navOpen ) {
      setNavOpen( true );
    }
  };

  const handleReturnHome = () => {
    router.push( '/' );
    setNavOpen( false );
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
          onClick={ () => handleReturnHome() }
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
            templateColumns='repeat( 4, 1fr )'
            gap='5px'
          >
            <IconButton
              onClick={ () => signOut({ callbackUrl: '/login' }) }
              size='lg'
              icon={ <Icon as={ MdLogout } boxSize='30px' /> }
              backgroundColor='transparent'
              border='1px solid'
              borderColor='gray.400'
            />
          </Grid>
        </Flex>
        : null
      }
    </Flex>
  );
};