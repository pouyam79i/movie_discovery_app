import React from "react";
import useLanguages from "../hooks/useLanguages";

const Languages = () => {
  const { languages, isLoading, error } = useLanguages();

  return (
    <ul>
      {languages.map((lang) => (
        <li>{lang.english_name}</li>
      ))}
    </ul>
  );
};

export default Languages;
