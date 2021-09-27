import { FETCH_WATCHLIST } from "./types";
import themoviedb from "../api/themoviedb";
import getCookie from "../components/Authentication/getCookie";

export const getWatchlist = page => async (dispatch, getState) => {
    const sessionId = getCookie("sessionId");
    const account_id = getState().accountDetails.id;

    const {data} = await themoviedb.get(`/account/${account_id}/watchlist/movies`, {
        params: {
            page,
            session_id: sessionId,
            sort_by: "created_at.desc"
        }
    })

    dispatch({
        type: FETCH_WATCHLIST,
        payload: data.results
    });
}
