import { FETCH_CAST } from './types';
import themoviedb from '../api/themoviedb';

export const getCast = id => async dispatch => {

    const {data} = await themoviedb.get(`/movie/${id}/credits`)

    dispatch({
        type: FETCH_CAST,
        payload: data
    });
}