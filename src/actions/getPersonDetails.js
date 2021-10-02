import themoviedb from "../api/themoviedb";
import { FETCH_PERSON_DETAILS } from "./types";

export const getPersonDetails = id => async dispatch => {
    const {data} = await themoviedb.get(`/person/${id}`);

    dispatch({
        type: FETCH_PERSON_DETAILS,
        payload: data
    });
}