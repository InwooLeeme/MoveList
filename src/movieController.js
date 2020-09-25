import {
  getMovieById,
  getMovies,
  getMovieByMinimumRating,
  getMovieByMinimumYear,
} from "./db";

export const home = (req, res) => {
  const movies = getMovies();
  const title = movies.map((movies) => movies.title);
  const id = movies.map((movies) => movies.id);
  const description = movies.map((movies) => movies.description_full);
  res.render("movies", { movies });
};
export const movieDetail = (req, res) => {};
export const filterMovie = (req, res) => {};
