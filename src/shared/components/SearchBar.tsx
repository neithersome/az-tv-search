import { TextField, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useSearch } from "../context/search";

const SearchBar = () => {
  const search = useSearch();

  return (
    <TextField
      label="Search"
      value={search.value}
      onChange={(e) => {
        const value = e.target.value;
        search.set(value);
      }}
      InputProps={{
        endAdornment: <SearchIcon />,
        sx: { borderRadius: 5 },
      }}
      sx={{ width: "70%" }}
    />
  );
};

export default SearchBar;
