import { digimon } from "../assets/digimonData"
import { DigiPixel } from "../components/DigiPixel"

import { 
  Flex,
 } from "@chakra-ui/react"

export default function Home() {
  return (
    <Flex
      justifyContent='center'
      alignItems='center'
    >
      <DigiPixel digimon={ digimon[1] } />
    </Flex>
  )
}
