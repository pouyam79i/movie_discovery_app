import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface Movie {
  id: number;
  title: string;
  original_title: string;
  overview: string;
  popularity: number;
  // poster_path: string;
}

const MovieGrid = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    console.log("Trying");
    apiClient
      .get<Movie[]>("/Random/20")
      .then((res) => {
        console.log("I got res");
        console.log(res.data);
        setMovies(res.data);
      })
      .catch((err) => setError(err.message));
  }, []);

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </>
  );
};

export default MovieGrid;
