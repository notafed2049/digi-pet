import { digimon } from "../assets/digimonData"

import { 
  Flex,
  Image
 } from "@chakra-ui/react"

export default function Home() {
  return (
    <Flex>
      <Image 
        src={ digimon[1].sprite }
        alt={ digimon[1].name }
      />
    </Flex>
  )
}
