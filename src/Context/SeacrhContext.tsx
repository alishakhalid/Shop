import React, { createContext, useState, FC } from "react";
export type SearchContextState = {
  search: string;
  addSearch: (name: string) => void;
};
const contextDefaultValues: SearchContextState = {
  search: "",
  addSearch: () => {},
};
export const SearchContext =
  createContext<SearchContextState>(contextDefaultValues);
const SearchProvider: FC = ({ children }) => {
  const [searchName, setSearch] = useState<string>(contextDefaultValues.search);
  const addSearch = (newSearch: string) => setSearch(newSearch);
  return (
    <SearchContext.Provider value={{ search: searchName, addSearch }}>
      {children}
    </SearchContext.Provider>
  );
};
export default SearchProvider;
