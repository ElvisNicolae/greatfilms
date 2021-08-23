import { FETCH_TRENDING_MOVIES } from './types';
import themoviedb from '../api/themoviedb';

export const fetchTrendingMovies = () => async dispatch => {
    const {data} = await themoviedb.get("/trending/movie/week");

    dispatch({
        type: FETCH_TRENDING_MOVIES,
        payload: data.results
    });
}