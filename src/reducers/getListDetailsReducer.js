import { FETCH_LIST_DETAILS } from "../actions/types";

const getListDetailsReducer = (state = { }, action) => {
    switch(action.type){
        case FETCH_LIST_DETAILS: 
            return action.payload;
        default:
            return state;
    }
}

export default getListDetailsReducer;