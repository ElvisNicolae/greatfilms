import { FETCH_CREATED_LISTS } from './types';
import getCookie from '../components/Authentication/getCookie';
import themoviedb from '../api/themoviedb';

export const getCreatedLists = accountId => async dispatch => {
    const sessionId = getCookie('sessionId');
    const {data} = await themoviedb.get(`/account/${accountId}/lists`, {
        params: {
            session_id: sessionId
        }
    });

    dispatch({
        type: FETCH_CREATED_LISTS,
        payload: data.results
    })
}