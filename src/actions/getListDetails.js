import { FETCH_LIST_DETAILS } from "./types";
import themoviedb from "../api/themoviedb";

export const getListDetails = listId => async (dispatch) => {
    const {data} = await themoviedb.get(`/list/${listId}`);

    dispatch({
        type: FETCH_LIST_DETAILS,
        payload: data
    });
}
