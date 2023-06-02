import { createBrowserRouter } from "react-router-dom";

import { getShow } from "../shared/api/tvmaze";
import Root from "./Root";
import ViewShow from "./ViewShow";
import ErrorPage from "./ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/shows/:id",
    element: <ViewShow />,
    loader: ({ params: { id } }) => {
      if (!id) return Promise.reject(new Error("No id provided"));
      return getShow(id);
    },
  },
]);
