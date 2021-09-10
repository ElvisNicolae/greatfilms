import { SET_SEARCH_TERM } from "../actions/types";

const setSearchTermReducer = (state = "", action) => {
    switch(action.type){
        case SET_SEARCH_TERM:
            return action.payload;
        default:
            return state;
    }
}

export default setSearchTermReducer;