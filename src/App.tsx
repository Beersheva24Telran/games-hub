import { Grid, GridItem, Stack } from "@chakra-ui/react";
import Nav from "./components/Nav";
import GameGrid from "./components/GameGrid";
import GanreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import ParentPlatform from "./model/ParentPlatform";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<ParentPlatform | null>(null);
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
          <GanreList
            selectedGenre={selectedGenre}
            onSelectGenre={(genreName: string) => setSelectedGenre(genreName)}
          />
        </GridItem>
      </Stack>

      <GridItem area="main" paddingX="5">
        <PlatformSelector onSelectPlatform={(platform) => setSelectedPlatform(platform)} selectedPlatform={selectedPlatform}></PlatformSelector>
        <GameGrid selectedGenre={selectedGenre} selectedPlatform={selectedPlatform} />
      </GridItem>
    </Grid>
  );
}

export default App;
