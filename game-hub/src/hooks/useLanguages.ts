import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Language {
  iso_639_1: string;
  english_name: string;
  name: string;
}

const useLanguages = () => {
  const [languages, setLanguages] = useState<Language[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<Language[]>("/configuration/languages", {
        signal: controller.signal,
      })
      .then((res) => {
        setLanguages(res.data.slice(0, 20));
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { languages, isLoading, error };
};

export default useLanguages;
