import { Box, SxProps, Typography, debounce } from "@mui/material";
import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { ShowSearchResult } from "../shared/api/tvmaze/types";
import SearchBar from "../shared/components/SearchBar";
import Preview from "../shared/compositions/Preview";
import { useSearch } from "../shared/context/search";
import { Show } from "../shared/types";

const SEARCH_TIMEOUT = 2000;

const Root = () => {
  const search = useSearch();

  const debounceSearch = useCallback(
    debounce(() => {
      search.execute();
    }, SEARCH_TIMEOUT),
    [search.value]
  );

  useEffect(() => {
    debounceSearch();

    return debounceSearch.clear;
  }, [search.value]);

  return (
    <Box sx={containerStyles}>
      {!search.data?.length && <Header />}
      <SearchBar />
      {search.isLoading && <div>Loading...</div>}
      {search.error && <div>{search.error.message}</div>}
      {search.data && <Results list={search.data} />}
    </Box>
  );
};

export default Root;

const Header = () => (
  <Box display="block">
    <Typography variant="h1" marginBottom={0}>
      TV Show Search
    </Typography>
    <Typography variant="subtitle1" color="grey[100]">
      Explore you favorite TV shows
    </Typography>
  </Box>
);

const containerStyles: SxProps = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 10,
};

const Results = ({ list }: { list: ShowSearchResult[] }) => {
  const navigateTo = useNavigate();

  return (
    <Box sx={resultsStyles} className={list.length ? "expanded" : ""}>
      {list.map(
        ({
          show: { id, name, image, rating, averageRuntime },
        }: {
          show: Show;
        }) => (
          <Preview
            key={id}
            id={id}
            name={name}
            image={image}
            rating={rating}
            averageRuntime={averageRuntime}
            onClick={() => navigateTo(`/shows/${id}`)}
          />
        )
      )}
    </Box>
  );
};

const resultsStyles: SxProps = {
  width: "100%",
  height: 0,
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-evenly",
  gap: 5,
  flexWrap: "wrap",
  opacity: 0,
  transition: "0.5s ease-out",
  "&.expanded": {
    opacity: 1,
    height: "100vh",
  },
};
