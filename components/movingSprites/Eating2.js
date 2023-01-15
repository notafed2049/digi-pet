import React from 'react';

import {
  Image,
  Flex,
} from '@chakra-ui/react';


//TODO complete this styling
export const Eating = ({ petData }) => {

  return (
    <Flex
      minWidth='100vw'
      direction='column'
    >
      <Flex
        width='100%'
        border='5px double'
        borderColor={ petData.digimonData.borderTheme }
        borderRadius='10px'
        backgroundColor={ petData.digimonData.bgTheme }
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
          src={ `${ petData.digimonData.sprite }/happy.gif` }
          alt={ petData.digimonData.species }
          width='33vw'
          height='33vw'
        />
      </Flex>
    </Flex>
  );
};