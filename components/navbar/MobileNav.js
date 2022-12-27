import React, { useState } from 'react';
import { signOut } from 'next-auth/react';

import {
  Flex,
  Text,
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
          onClick={ () => handleOpenNav() }
          size='lg'
          icon={ navOpen ? <CloseIcon color='red.500' /> : <HamburgerIcon color='red.500' /> }
          backgroundColor='transparent'
        />
      </Flex>

      {
        navOpen ?
        <Flex
          border='1px solid gold'
        >
          <Grid
            width='100%'
            border='1px solid red'
            templateColumns='repeat( 4, 1fr )'
          >
            <IconButton
              size='lg'
              icon={ <Icon as={ GiWeightScale } boxSize='30px' /> }
              backgroundColor='transparent'
            />
            <IconButton
              size='lg'
              icon={ <Icon as={ GiMeat } boxSize='30px' /> }
              backgroundColor='transparent'
            />
            <IconButton
              size='lg'
              icon={ <Icon as={ GiPunchingBag } boxSize='30px' /> }
              backgroundColor='transparent'
            />
            <IconButton
              size='lg'
              icon={ <Icon as={ GiPunchBlast } boxSize='30px' /> }
              backgroundColor='transparent'
            />
            <IconButton
              size='lg'
              icon={ <Icon as={ FaPoop } boxSize='30px' /> }
              backgroundColor='transparent'
            />
            <IconButton
              onClick={ () => signOut({ callbackUrl: '/login' }) }
              size='lg'
              icon={ <Icon as={ MdLogout } boxSize='30px' /> }
              backgroundColor='transparent'
            />
          </Grid>
        </Flex>
        : null
      }
    </Flex>
  );
};