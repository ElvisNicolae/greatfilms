import themoviedb from '../api/themoviedb';
import { FETCH_POPULAR_PEOPLE } from './types';

export const getPopularPeople = page => async dispatch => {
    const {data} = await themoviedb.get("/person/popular", {
        params: {
            page
        }
    });

    dispatch({
        type: FETCH_POPULAR_PEOPLE,
        payload: data.results
    });
}
