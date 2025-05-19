
import { Box, Button, ToastDescription} from '@chakra-ui/react'
import './App.css'
import { ColorModeButton } from './components/ui/color-mode'
import { Tooltip } from './components/ui/tooltip'
import { Toaster, toaster } from './components/ui/toaster'

function App() {

  return (
    <>
    <Toaster></Toaster>
    <ColorModeButton></ColorModeButton>
    <Tooltip content="box description" showArrow contentProps={{backgroundColor: "blue"}}>
       <Box >
      
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur optio dolorem autem ipsam laborum fugiat fugit nam nobis voluptates qui iusto, voluptatum quisquam, iure excepturi iste alias saepe. Officiis incidunt cupiditate error consequatur aspernatur aliquam eum quae ex eius tempore nostrum exercitationem amet recusandae ipsam facere quis dolore atque, fuga officia deserunt vel doloribus minima neque debitis. Modi, odio debitis? Dolores fugiat alias, officiis a architecto maiores accusamus minus totam consectetur dolore, inventore, amet ipsa perferendis aperiam. Minus corrupti tenetur, in corporis explicabo est voluptates expedita facere asperiores repudiandae doloremque beatae laborum praesentium aliquid sequi impedit cum fugit at? Id.
    </Box>
    </Tooltip>
    <Button  onClick={() => toaster.create({
      description:"File not saved",
      type: "info",
    
      action: {
            label: "X",

          onClick: ()=>{}
          },
    })}>Save File</Button>
   
    </>
    
     
   
  )
}

export default App
