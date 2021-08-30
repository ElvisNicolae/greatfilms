import { FETCH_UPCOMING } from "./types";
import themoviedb from '../api/themoviedb';

export const upcomingMovies = page => async dispatch => {
    const { data } = await themoviedb.get("/movie/upcoming", {
        params: {
            page
        }
    });

    dispatch({
        type: FETCH_UPCOMING,
        payload: data.results
    });
}