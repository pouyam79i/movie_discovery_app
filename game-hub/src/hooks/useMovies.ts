import useData from "./useData";
import { Genre } from "./useGenres";

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

const useMovies = (selectedGenre: Genre | null) => {
  return useData<FetchedMovies>(
    "/discover/movie?include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
    { params: { with_genres: selectedGenre?.id } },
    [selectedGenre]
  );
};

export default useMovies;
