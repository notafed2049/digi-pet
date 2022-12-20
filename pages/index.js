import { egg } from '../assets/egg';
import { baby } from "../assets/baby";
import { child } from '../assets/child';
import { adult } from "../assets/adult";
import { perfect } from "../assets/perfect";
import { ultimate } from "../assets/ultimate";

import { DigiPet } from '../components/DigiPet';
import { Train } from "../components/Train";
import { Fight } from "../components/Fight";
import { Sleep } from "../components/Sleep";

import { 
  Flex,
 } from "@chakra-ui/react"

export default function Home() {

  return (
    <Flex
      direction='column'
    >
      <DigiPet pet={ ultimate[0] } />
    </Flex>
  )
}