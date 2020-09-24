import { getMovies } from "./db";

export const localMiddleware = (req, res ,next){
  res.locals.movies = getMovies;
  next();
}