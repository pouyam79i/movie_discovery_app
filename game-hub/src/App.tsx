import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import MovieGrid from "./components/MoviesGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import LanguageList from "./components/LanguageList";
import { Genre } from "./hooks/useGenres";
import { Lang } from "./hooks/useLanguage";

export interface MovieQuery {
  genre: Genre | null;
  lang: Lang;
}

function App() {
  const [movieQuery, setMovieQuery] = useState<MovieQuery>({
    lang: {
      english_name: "English",
      iso_639_1: "en",
      name: "English",
    },
    genre: null,
  } as MovieQuery);

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
              setMovieQuery({ ...movieQuery, genre });
            }}
            selectedGenre={movieQuery.genre}
          />
        </GridItem>
      </Show>
      <GridItem area="main" paddingX={"10px"}>
        <Show above="md">
          <LanguageList
            selectedLang={movieQuery.lang}
            onSelectLang={(lang: Lang) => {
              setMovieQuery({ ...movieQuery, lang });
            }}
          />
        </Show>
        <MovieGrid movieQuery={movieQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
