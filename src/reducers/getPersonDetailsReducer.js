import { FETCH_PERSON_DETAILS } from '../actions/types';

const getPersonDetailsReducer = (state = {}, action) => {
    switch(action.type){
        case FETCH_PERSON_DETAILS:
            return action.payload;
        default:
            return state;
    }
}

export default getPersonDetailsReducer;