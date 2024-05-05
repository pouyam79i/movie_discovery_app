import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Movie } from "../hooks/useMovies";

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
      <CardBody>
        <Heading fontSize={"2xl"}>{movie.title}</Heading>
      </CardBody>
    </Card>
  );
};

export default MovieCard;
