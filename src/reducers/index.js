import { combineReducers } from "redux";
import topRatedMovies from './topRatedReducer';
import trendingMovies from "./trendingMoviesReducer";
import genres from "./genresReducer";
import getMovie from './getMovieReducer';

export default combineReducers({
    topRatedMovies,
    trendingMovies,
    genres,
    getMovie
});