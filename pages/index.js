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
  return (
    <Flex
      direction='column'
    >
      <NormalIdle digimon={ ultimate[1] } />
      <Fight digimon={ ultimate[1] } />
    </Flex>
  )
}