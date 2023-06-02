import { Person, Show } from "../../types";

export interface ShowSearchResult {
  score: number;
  show: Show;
}

export type SearchShowsApiResponse = ShowSearchResult[];

export interface ShowApiResponse extends Show {
  _embedded: {
    cast: Person[];
  };
}
