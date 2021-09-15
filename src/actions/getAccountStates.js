import { FETCH_ACCOUNT_STATES } from './types';
import themoviedb from "../api/themoviedb";
import getCookie from '../components/Authentication/getCookie';

const getAccountStates = movieId => async dispatch => {
    const sessionId = getCookie("sessionId");

    const {data} = await themoviedb.get(`/movie/${movieId}/account_states`, {
        params: {
            session_id: sessionId
        }
    });

    dispatch({
        type: FETCH_ACCOUNT_STATES,
        payload: data
    });
}

export default getAccountStates;