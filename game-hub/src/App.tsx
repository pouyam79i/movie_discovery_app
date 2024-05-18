import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import MovieGrid from "./components/MoviesGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import LanguageList from "./components/LanguageList";
import { Genre } from "./hooks/useGenres";
import { Lang } from "./hooks/useLanguage";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedLang, setSelectedLang] = useState<Lang>({
    english_name: "English",
    iso_639_1: "en",
    name: "English",
  });

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
          <GenreList
            onSelectGenre={(genre: Genre) => {
              setSelectedGenre(genre);
            }}
            selectedGenre={selectedGenre}
          />
        </GridItem>
      </Show>
      <GridItem area="main" paddingX={"10px"}>
        <Show above="md">
          <LanguageList
            selectedLang={selectedLang}
            onSelectLang={(newLang: Lang) => {
              setSelectedLang(newLang);
            }}
          />
        </Show>
        <MovieGrid selectedGenre={selectedGenre} selectedLang={selectedLang} />
      </GridItem>
    </Grid>
  );
}

export default App;
