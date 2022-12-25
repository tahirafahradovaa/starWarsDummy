import { createContext, useState } from "react";
export const starwarsContext = createContext(null);
export const StarWarsProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [test, setTest] = useState("1");

  const values = {
    characters,
    setCharacters,
    test,
    setTest,
  };

  return (
    <starwarsContext.Provider value={values}>
      {children}
    </starwarsContext.Provider>
  );
};
