import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/image.png'
import {FC} from 'react'
import { ColorModeButton } from './ui/color-mode'
import SearchBar from './SearchBar'

const Nav: FC = () => {
  
  return (
    <HStack >
        <Image src={logo} boxSize={"30px"} ></Image>
        <SearchBar></SearchBar>
        <ColorModeButton></ColorModeButton>
    </HStack>
  )
}

export default Nav