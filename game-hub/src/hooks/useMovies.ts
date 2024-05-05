import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Movie {
  id: number;
  title: string;
  //   original_title: string;
  //   overview: string;
  release_date: string;
  vote_average: number;
  //   adult: boolean;
  poster_path: string;
}

interface FetchedMovies {
  results: Movie[];
}

const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    console.log("Trying");
    apiClient
      .get<FetchedMovies>("", { signal: controller.signal })
      .then((res) => {
        console.log("I got res");
        console.log(res.data.results);
        setMovies(res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { movies, error };
};

export default useMovies;
