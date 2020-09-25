export const localMiddleware = (req, res, next) => {
  res.locals.homeTitle = "Movies";
  next();
};
