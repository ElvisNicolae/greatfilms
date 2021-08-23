import { FETCH_MOVIE } from './types';
import themoviedb from '../api/themoviedb';

export const getMovie = movieId => async dispatch => {
    const {data} = await themoviedb.get(`/movie/${movieId}`);

    dispatch({
        type: FETCH_MOVIE,
        payload: data
    });
}
