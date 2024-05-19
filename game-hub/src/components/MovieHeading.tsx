import { Heading } from "@chakra-ui/react";
import { MovieQuery } from "../App";

interface Props {
  movieQuery: MovieQuery;
}

const MovieHeading = ({ movieQuery }: Props) => {
  const heading = `${movieQuery.genre?.name || ""} Movies`;
  return <Heading marginY={5} fontSize={'5xl'}>{heading}</Heading>;
};

export default MovieHeading;
