import { FETCH_CAST } from "../actions/types";

const getCastReducer = (state = {}, action) => {
    switch(action.type){
        case FETCH_CAST:
            return action.payload;
        default: 
            return state;
    }
}

export default getCastReducer;