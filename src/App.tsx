import { Box, Grid, GridItem, HStack, Stack, Text } from "@chakra-ui/react";
import Nav from "./components/Nav";
import GameGrid from "./components/GameGrid";
import GanreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import Sorter from "./components/Sorter";
import GenresSelector from "./components/GenresSelector";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `'nav' 'main'`,
        md: `'nav nav' 'aside main'`,
      }}
    >
      <GridItem area="nav">
        <Nav></Nav>
      </GridItem>
      <Stack hideBelow={"md"}>
        <GridItem area="aside" paddingX={5}>
          <GanreList />
        </GridItem>
      </Stack>

      <GridItem area="main" paddingX="5">
        <HStack justifyContent="space-around">
          <PlatformSelector/>
          <Sorter/>
          <Box as="div" display={"inline"} hideBelow={"sm"} hideFrom={"md"}>
            <GenresSelector/>
          </Box>
        </HStack>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
