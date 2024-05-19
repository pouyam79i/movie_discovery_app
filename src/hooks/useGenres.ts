import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
}

interface FetchedGenres {
  genres: Genre[];
}

const useGenre = () => {
  return useData<FetchedGenres>("/genre/movie/list?language=en");
};

export default useGenre;
