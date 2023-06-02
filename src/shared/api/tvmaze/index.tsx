import tvMaze from "./axios";
import { SearchShowsApiResponse } from "./types";

export const searchShows = async (
  query: string
): Promise<SearchShowsApiResponse> =>
  tvMaze.get(`search/shows?q=${query}`).then((res) => res.data);

export const getShow = async (id: string) =>
  tvMaze.get(`shows/${id}?embed=cast`).then((res) => res.data);
