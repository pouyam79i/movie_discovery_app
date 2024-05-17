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

const useMovies = () => {
  return useData<FetchedMovies>(
    "/discover/movie?include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc"
  );
};

export default useMovies;
