import React, { useContext } from 'react';

import { DigimonContext } from '../../pages';

import {
  Image,
  Flex,
} from '@chakra-ui/react';


//TODO complete this styling
export const Eating = () => {
  const { myPet } = useContext( DigimonContext )

  return (
    <Flex
      minWidth='100vw'
      direction='column'
    >
      <Flex
        width='100%'
        border='5px double'
        borderColor={ myPet.digimonData.borderTheme }
        borderRadius='10px'
        backgroundColor={ myPet.digimonData.bgTheme }
        justifyContent='center'
        alignItems='end'
      >
        <Image
          src='/pixel_meat.png'
          alt='pixel meat'
          width='15vw'
          height='15vw'
        />
        <Image
          src={ `${ myPet.digimonData.sprite }/happy.gif` }
          alt={ myPet.digimonData.species }
          width='33vw'
          height='33vw'
        />
      </Flex>
    </Flex>
  );
};