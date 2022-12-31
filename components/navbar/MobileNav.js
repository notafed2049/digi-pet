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

import { FaPoop } from 'react-icons/fa';
import { MdLogout } from 'react-icons/md';
import {
  GiPunchingBag,
  GiMeat,
  GiWeightScale,
  GiPunchBlast
} from 'react-icons/gi'

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

  const handleNav = ( link ) => {
    router.push( link );
    setNavOpen( false );
  };

  return (
    <Flex
      direction='column'
      width='100%'
      borderBottom='1px solid'
      borderColor='red.500'
    >
      <Flex
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        padding='5px 10px'
      >
        <Button
          onClick={ () => router.push('/') }
          variant='ghost'
        >
          digiPet
        </Button>
        <IconButton
          onClick={ () => handleOpenNav() }
          size='lg'
          icon={ navOpen ? <CloseIcon /> : <HamburgerIcon boxSize='30px' /> }
          variant='outline'
          colorScheme='red.500'
        />
      </Flex>

      {
        navOpen ?
        <Flex
          padding='5px'
          borderTop='1px solid'
          borderColor='red.500'
        >
          <Grid
            width='100%'
            templateColumns='repeat( 4, 1fr )'
            gap='5px'
          >
            <IconButton
              onClick={ () => handleNav( '/stats' ) }
              size='lg'
              icon={ <Icon as={ GiWeightScale } boxSize='30px' /> }
              backgroundColor='transparent'
              border='1px solid'
              borderColor='red.500'
            />
            <IconButton
              size='lg'
              icon={ <Icon as={ GiMeat } boxSize='30px' /> }
              backgroundColor='transparent'
              border='1px solid'
              borderColor='red.500'
            />
            <IconButton
              size='lg'
              icon={ <Icon as={ GiPunchingBag } boxSize='30px' /> }
              backgroundColor='transparent'
              border='1px solid'
              borderColor='red.500'
            />
            <IconButton
              size='lg'
              icon={ <Icon as={ GiPunchBlast } boxSize='30px' /> }
              backgroundColor='transparent'
              border='1px solid'
              borderColor='red.500'
            />
            <IconButton
              size='lg'
              icon={ <Icon as={ FaPoop } boxSize='30px' /> }
              backgroundColor='transparent'
              border='1px solid'
              borderColor='red.500'
            />
            <IconButton
              onClick={ () => signOut({ callbackUrl: '/login' }) }
              size='lg'
              icon={ <Icon as={ MdLogout } boxSize='30px' /> }
              backgroundColor='transparent'
              border='1px solid'
              borderColor='red.500'
            />
          </Grid>
        </Flex>
        : null
      }
    </Flex>
  );
};