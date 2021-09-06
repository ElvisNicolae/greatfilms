import { FETCH_RECOMMENDED } from './types';
import themoviedb from '../api/themoviedb';

export const getRecommended = (movieId, page) => async dispatch => {
    const {data} = await themoviedb.get(`/movie/${movieId}/recommendations`, {
        params: {
            page
        }
    });

    dispatch({
        type: FETCH_RECOMMENDED,
        payload: data.results
    });
}
