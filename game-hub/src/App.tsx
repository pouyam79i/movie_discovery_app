import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import MovieGrid from "./components/MoviesGrid";
import Languages from "./components/Languages";
import { useState } from "react";

function App() {
  const [selectedLang, setSelectedLang] = useState<string>("en");

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
          <Languages
            onSelectLang={(lang: string) => {
              setSelectedLang(lang);
            }}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <MovieGrid selectedLang={selectedLang} />
      </GridItem>
    </Grid>
  );
}

export default App;
