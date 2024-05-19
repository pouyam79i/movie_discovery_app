import useData from "./useData";

export interface Lang {
  iso_639_1: string;
  english_name: string;
  name: string;
}

const useLanguage = () => {
  return useData<Lang[]>("/configuration/languages");
};

export default useLanguage;
