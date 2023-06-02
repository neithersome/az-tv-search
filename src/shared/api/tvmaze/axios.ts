import axios from "axios";

const tvMaze = axios.create({
  baseURL: " https://api.tvmaze.com",
  timeout: 1000,
});

export default tvMaze;
