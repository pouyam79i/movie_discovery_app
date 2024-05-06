import { Card, CardBody, Heading, Image, VStack } from "@chakra-ui/react";
import { Movie } from "../hooks/useMovies";
import MovieDescription from "./MovieDescription";
import emptyCover from "../assets/empty-cover.webp";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image
        src={
          "https://image.tmdb.org/t/p/w600_and_h900_bestv2" + movie.poster_path
        }
      />
      <CardBody
        flexDirection={"column"}
        display={"flex"}
        justifyContent={"space-around"}
      >
        <Heading fontSize={"2xl"}>{movie.title}</Heading>
        <MovieDescription
          overview={movie.overview}
          vote_average={movie.vote_average}
        />
      </CardBody>
    </Card>
  );
};

export default MovieCard;
