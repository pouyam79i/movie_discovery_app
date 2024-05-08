import { SimpleGrid, Text } from "@chakra-ui/react";
import useMovies from "../hooks/useMovies";
import MovieCard from "./MovieCard";
import MovieCardSkeleton from "./MovieCardSkeleton";
import MovieCardContainer from "./MovieCardContainer";

interface Props {
  selectedLang: string;
}

const MovieGrid = ({ selectedLang }: Props) => {
  const { movies, error, isLoading } = useMovies(selectedLang);
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={10}
        spacing={3}
      >
        {isLoading &&
          skeletons.map((item) => (
            <MovieCardContainer key={item}>
              <MovieCardSkeleton />
            </MovieCardContainer>
          ))}
        {!isLoading &&
          movies.map((movie) => (
            <MovieCardContainer key={movie.id}>
              <MovieCard movie={movie} />
            </MovieCardContainer>
          ))}
      </SimpleGrid>
    </>
  );
};

export default MovieGrid;
