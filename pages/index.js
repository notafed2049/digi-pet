import { baby } from "../assets/baby";
import { child } from '../assets/child';
import { adult } from "../assets/adult";
import { perfect } from "../assets/perfect";
import { ultimate } from "../assets/ultimate";

import { BabyIdle } from "../components/idle/BabyIdle"
import { NormalIdle } from "../components/idle/NormalIdle";

import { 
  Flex,
 } from "@chakra-ui/react"

export default function Home() {
  return (
    <Flex
      direction='column'
      justifyContent='center'
      alignItems='center'
    >
      {/* {
        baby.map(( digimon ) => {
          return <BabyIdle key={ digimon.species } digimon={ digimon } />
        })
      } */}
      {
        child.map(( digimon ) => {
          return <NormalIdle key={ digimon.species } digimon={ digimon } />
        })
      }
      {/* {
        adult.map(( digimon ) => {
          return <NormalIdle key={ digimon.species } digimon={ digimon } />
        })
      } */}
      {/* {
        perfect.map(( digimon ) => {
          return <NormalIdle key={ digimon.species } digimon={ digimon } />
        })
      } */}
      {
        ultimate.map(( digimon ) => {
          return <NormalIdle key={ digimon.species } digimon={ digimon } />
        })
      }
    </Flex>
  )
}
