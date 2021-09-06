import { combineReducers } from "redux";
import topRatedMovies from './topRatedReducer';
import trendingMovies from "./trendingMoviesReducer";
import genres from "./genresReducer";
import getMovie from './getMovieReducer';
import getUpcomingMovies from "./getUpcomingMoviesReducer";
import getRecommended from "./getRecommendedReducer";
import getCastReducer from "./getCastReducer";

export default combineReducers({
    topRatedMovies,
    trendingMovies,
    genres,
    movie: getMovie,
    upcomingMovies: getUpcomingMovies,
    movieCast: getCastReducer,
    recommendedMovies: getRecommended
});