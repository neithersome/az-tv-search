import { RouterProvider } from "react-router-dom";
import { Container } from "@mui/material";

import { SearchProvider } from "./shared/context/search";
import { router } from "./routes";
import "./App.css";

function App() {
  return (
    <Container maxWidth="xl">
      <SearchProvider>
        <RouterProvider router={router} />
      </SearchProvider>
    </Container>
  );
}

export default App;
