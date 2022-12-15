import React from 'react';

import { 
  Image,
 } from '@chakra-ui/react';

export const DigiPixel = ({ digimon }) => {

  return (
    <Image
      src={ digimon.sprite }
      alt={ digimon.name }
    />
  );
};