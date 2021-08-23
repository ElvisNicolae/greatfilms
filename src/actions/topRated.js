import { FETCH_TOP_RATED_MOVIES } from './types';
import themoviedb from '../api/themoviedb';

export const fetchTopRatedMovies = () => async dispatch => {
    const {data} = await themoviedb.get("/movie/top_rated");

    dispatch({
        type: FETCH_TOP_RATED_MOVIES,
        payload: data.results
    });
}
