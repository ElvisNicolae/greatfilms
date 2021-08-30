import { FETCH_TRENDING_MOVIES } from './types';
import themoviedb from '../api/themoviedb';

export const fetchTrendingMovies = page => async dispatch => {
    const {data} = await themoviedb.get("/trending/movie/week", {
        params: {
            page
        }
    });

    dispatch({
        type: FETCH_TRENDING_MOVIES,
        payload: data.results
    });
}