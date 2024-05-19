import { Card, CardBody, Heading, Image, VStack } from "@chakra-ui/react";
import { ReactNode, useRef } from "react";
import MovieDescription from "./MovieDescription";
import { Movie } from "../hooks/useMovies";
import emptyCover from "../assets/emptycover.webp";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  const imgRef = useRef<any>();
  const onImageError = () => (imgRef.current.src = emptyCover);

  return (
    <Card>
      <Image
        ref={imgRef}
        src={
          "https://image.tmdb.org/t/p/w600_and_h900_bestv2" + movie.poster_path
        }
        onError={onImageError}
        alt={emptyCover}
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
