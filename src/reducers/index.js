import { combineReducers } from "redux";
import topRatedMovies from './topRatedReducer';
import trendingMovies from "./trendingMoviesReducer";
import genres from "./genresReducer";
import getMovie from './getMovieReducer';
import getUpcomingMovies from "./getUpcomingMoviesReducer";
import getRecommended from "./getRecommendedReducer";
import getCastReducer from "./getCastReducer";
import searchMovieReducer from "./searchMovieReducer";
import setSearchTermReducer from "./setSearchTermReducer";
import getAccountReducer from "./getAccountReducer";
import getAccountStatesReducer from "./getAccountStatesReducer";
import getWatchlistReducer from './getWatchlistReducer';
import getPopularPeopleReducer from "./getPopularPeopleReducer";
import getPersonDetailsReducer from './getPersonDetailsReducer';
import getPersonCreditsReducer from './getPersonCreditsReducer';
import getCreatedListsReducer from "./getCreatedListsReducer";

export default combineReducers({
    topRatedMovies,
    trendingMovies,
    genres,
    movie: getMovie,
    upcomingMovies: getUpcomingMovies,
    movieCast: getCastReducer,
    recommendedMovies: getRecommended,
    searchData: searchMovieReducer,
    searchTerm: setSearchTermReducer,
    accountDetails: getAccountReducer,
    accountStates: getAccountStatesReducer,
    createdLists: getCreatedListsReducer,
    watchlist: getWatchlistReducer,
    popularPeople: getPopularPeopleReducer,
    personDetails: getPersonDetailsReducer,
    personCredits: getPersonCreditsReducer
});