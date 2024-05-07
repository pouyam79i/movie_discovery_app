import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import MovieGrid from "./components/MoviesGrid";
import Languages from "./components/Languages";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "170px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={"10px"}>
          <Languages />
        </GridItem>
      </Show>
      <GridItem area="main">
        <MovieGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
