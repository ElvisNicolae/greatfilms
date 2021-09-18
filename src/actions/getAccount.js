import { FETCH_ACCOUNT } from './types';
import getCookie from '../components/Authentication/getCookie';
import themoviedb from '../api/themoviedb';

export const getAccount = () => async dispatch => {
    const sessionId = getCookie('sessionId');
    const {data} = await themoviedb.get("/account", {
        params: {
            session_id: sessionId
        }
    });

    dispatch({
        type: FETCH_ACCOUNT,
        payload: data
    })
}