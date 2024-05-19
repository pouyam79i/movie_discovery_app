import { MovieQuery } from "../App";
import useData from "./useData";

export interface Movie {
  id: number;
  title: string;
  original_title: string;
  overview: string;
  release_date: string;
  vote_average: number;
  adult: boolean;
  poster_path: string;
}

interface FetchedMovies {
  page: number;
  results: Movie[];
}

const useMovies = (movieQuery: MovieQuery) => {
  return useData<FetchedMovies>(
    "/discover/movie?include_adult=true&include_video=false&page=1",
    {
      params: {
        with_genres: movieQuery.genre?.id,
        language: movieQuery.lang?.iso_639_1,
        sort_by: movieQuery?.sortBy,
        with_keywords: movieQuery?.searchText
      },
    },
    [movieQuery]
  );
};

export default useMovies;
