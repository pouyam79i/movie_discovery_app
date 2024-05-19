import { SimpleGrid, Text } from "@chakra-ui/react";

import MovieCard from "./MovieCard";
import MovieCardSkeleton from "./MovieCardSkeleton";
import MovieCardContainer from "./MovieCardContainer";
import useMovies from "../hooks/useMovies";
import { MovieQuery } from "../App";

interface Props {
  movieQuery: MovieQuery;
}

const MovieGrid = ({ movieQuery }: Props) => {
  const { data, error, isLoading } = useMovies(movieQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={5}
        spacing={3}
      >
        {isLoading &&
          skeletons.map((item) => (
            <MovieCardContainer key={item}>
              <MovieCardSkeleton />
            </MovieCardContainer>
          ))}
        {!isLoading &&
          data?.results.map((movie) => (
            <MovieCardContainer key={movie.id}>
              <MovieCard movie={movie} />
            </MovieCardContainer>
          ))}
      </SimpleGrid>
    </>
  );
};

export default MovieGrid;
