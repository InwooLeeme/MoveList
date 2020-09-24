# Super-Controllers

This is Code Challenge Day11,12

# Challenge Goals :

1. 샌드박스 안에 db.js 라는 이름의 파일이 있습니다. 그 파일은 영화의 DB를 시뮬레이트 하고, 아래와 같은 4개 함수를 export 합니다.
2. 샌드박스 안에 movieController.js 그리고 movieRouter.js 가 있으며, 이는 3개의 routes 와 3개의 controllers 를 갖고있습니다.
3. Controllers와 Routers를 추가하거나 제거해서는 안됩니다. 단 3가지만으로 아래 챌린지를 수행할 수 있어요.

# Function Introduce

1. getMovies returns an array of movies, console.log the result to see the shape of the object.
2. getMovieById returns a movie object. It requires an ID as an argument and if no movie is found it returns undefined.
3. getMovieByMinimumRating returns an array of movies, it requires a number, with this number the function will return an array of movieswith a rating equal or higher than the number.
4. getMovieByMinimumYear returns an array of movies, it requires a number, with this number the function will return an array of movies with a release date equal or higher than the number.

# Conditions

- [ ] Complete all the controllers
- [ ] Use pug and mixins to render pages and loop over the movies list.
- [ ] Use templates.
- [x] You can only have 3 .pug pages. movies.pug, 404.pug, detail.pug
- [ ] Use middlewares to add locals like siteTitle
- [ ] / should render movies.pug and show a list of movies.
- [ ] /:id should render the detail of a movie
- [ ] /filter should filter by year and rating.
- [ ] The app must behave exactly like the video
