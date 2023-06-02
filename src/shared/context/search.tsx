import { createContext, useContext, useState } from "react";

import { searchShows } from "../api/tvmaze";
import { SearchShowsApiResponse } from "../api/tvmaze/types";
import useStatefulFetch, {
  UseStatefulFetchReturn,
} from "../hooks/useStatefullFetch";

interface SearchContextType
  extends UseStatefulFetchReturn<SearchShowsApiResponse> {
  value: string;
  set: (search: string) => void;
}

const SearchContext = createContext<SearchContextType>({} as SearchContextType);

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchValue, setSearchValue] = useState("");
  const fetchShows = useStatefulFetch<SearchShowsApiResponse>(() =>
    searchShows(searchValue)
  );

  return (
    <SearchContext.Provider
      value={{
        value: searchValue,
        set: setSearchValue,
        ...fetchShows,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
