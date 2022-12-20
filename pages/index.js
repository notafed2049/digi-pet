import { egg } from '../assets/egg';
import { baby } from "../assets/baby";
import { child } from '../assets/child';
import { adult } from "../assets/adult";
import { perfect } from "../assets/perfect";
import { ultimate } from "../assets/ultimate";

import { BabyIdle } from "../components/idle/BabyIdle"
import { NormalIdle } from "../components/idle/NormalIdle";
import { Train } from "../components/Train";
import { Fight } from "../components/Fight";
import { Sleep } from "../components/Sleep";
import { Egg } from '../components/Egg';


import { 
  Flex,
 } from "@chakra-ui/react"

export default function Home() {
  const currentDigimon = egg[0];
  console.log({ currentDigimon });

  let digitama = currentDigimon.stage === 'digitama';
  let baby = currentDigimon.stage === 'baby 1' || 'baby 2';
  let grownUp = currentDigimon.stage !== 'digitama' || 'baby 1' || 'baby 2';

  return (
    <Flex
      direction='column'
    >
      {
        digitama ? <Egg digitama={ currentDigimon } />
        : null
      }
      {
        baby ? <BabyIdle digimon={ currentDigimon } />
        : null
      }
      {
        grownUp ? <NormalIdle digimon={ currentDigimon } />
        : null
      }
    </Flex>
  )
}