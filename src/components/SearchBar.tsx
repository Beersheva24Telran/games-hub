import { InputGroup, Input, Box } from '@chakra-ui/react'
import { FormEvent, useRef, FC} from 'react'
import { FaSearch } from 'react-icons/fa'
import useGameQuery from '../state-management/store'

const SearchBar: FC= () => {
   const setSearchText = useGameQuery(s => s.setText)
    const inputElem = useRef<HTMLInputElement> (null);
    const onSubmit = (event: FormEvent) => {
        event.preventDefault();
        inputElem.current?.blur();
        setSearchText(inputElem.current?.value || "");
    }
  return (
   
    <Box as="form" onSubmit={onSubmit} boxSize="100%">
        <InputGroup startElement={<FaSearch></FaSearch>}>
        <Input onFocus={() => inputElem.current?.value && (inputElem.current.value = "")} ref={inputElem} borderRadius={"30px"} placeholder='Search games...' />
   </InputGroup>
    </Box>
      
  )
}

export default SearchBar
