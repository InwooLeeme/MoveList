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
  //console.log(movies);
};
export const movieDetail = (req, res) => {
  const {
    params: { id: currentId },
  } = req;
  /* let title = ""; */
  const currentMovieInfo = getMovieById(currentId);
  let title = currentMovieInfo.title;
  let description = currentMovieInfo.description_full;
  let genres = currentMovieInfo.genres;
  res.render("detail", { title, description, genres });
};
export const filterMovie = (req, res) => {
  const {
    query: { rating, year },
  } = req;
  if (year) {
    const movieYear = getMovieByMinimumYear(year);
    res.render("movies", { pageTitle: `Searching By year:${year}`, movieYear });
  } else if (rating) {
    const movieRating = getMovieByMinimumRating(rating);
    res.render("movies", {
      pageTitle: `Searching By rating:${rating}`,
      movieRating,
    });
  } else {
    res.status(400);
    res.render("404.pug");
  }
};
