import themoviedb from "../api/themoviedb";
import { FETCH_PERSON_CREDITS } from "./types";

export const getPersonCredits = id => async dispatch => {

    const {data} = await themoviedb.get(`/person/${id}/movie_credits`);

    dispatch({
        type: FETCH_PERSON_CREDITS,
        payload: data.cast
    });
}