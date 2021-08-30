import { combineReducers } from "redux";
import topRatedMovies from './topRatedReducer';
import trendingMovies from "./trendingMoviesReducer";
import genres from "./genresReducer";
import getMovie from './getMovieReducer';
import getUpcomingMovies from "./getUpcomingMovies";

export default combineReducers({
    topRatedMovies,
    trendingMovies,
    genres,
    getMovie,
    upcomingMovies: getUpcomingMovies
});