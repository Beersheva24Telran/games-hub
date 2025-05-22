import { Menu, Button, Portal, Spinner } from '@chakra-ui/react'
import {FaChevronDown} from 'react-icons/fa'
import usePlatforms from '../hooks/usePlatforms';
import { FC } from 'react';
import ParentPlatform from '../model/ParentPlatform';
interface Props {
    selectedPlatform: ParentPlatform | null;
    onSelectPlatform: (platform: ParentPlatform) => void
}
const PlatformSelector: FC<Props> = ({selectedPlatform, onSelectPlatform}) => {
    const {errorMessage, isLoading, data:platforms} = usePlatforms();
  return (
    <>
    { isLoading?  <Spinner></Spinner> :
    !errorMessage && 
        <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm" borderWidth={0}> 
         {selectedPlatform?.name || "Platforms"}
          <FaChevronDown/>
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
           { platforms.map(p => <Menu.Item key={p.id}onClick={() => onSelectPlatform(p)} value={p.id}>{p.name}</Menu.Item>)}
            
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
    }
    </>
    
  )
}

export default PlatformSelector