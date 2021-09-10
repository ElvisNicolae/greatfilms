import { SEARCH_MOVIE } from './types';
import themoviedb from '../api/themoviedb';

export const searchMovie = (page, term) => async dispatch => {

    const { data } = await themoviedb.get(`/search/movie`, {
        params: {
            query: term,
            page
        }
    });

    dispatch({
        type: SEARCH_MOVIE,
        payload: data.results
    });
}