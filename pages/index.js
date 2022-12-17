// import { babyI } from "../assets/babyI";
// import { babyII } from "../assets/babyII";
// import { child } from '../assets/child';
// import { adult } from '../assets/adult';
// import { perfect } from '../assets/perfect';
// import { ultimate } from '../assets/ultimate';

import { DigiPixel } from "../components/DigiPixel"

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
        babyI.map(( digimon ) => {
          return <DigiPixel key={ digimon.name } digimon={ digimon } />
        })
      } */}
    </Flex>
  )
}
