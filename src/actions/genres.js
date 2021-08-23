import { FETCH_GENRES } from './types';
import themoviedb from '../api/themoviedb';

export const fetchGenres = () => async dispatch => {
    const {data} = await themoviedb.get("/genre/movie/list");

    dispatch({
        type: FETCH_GENRES,
        payload: data.genres
    });
}