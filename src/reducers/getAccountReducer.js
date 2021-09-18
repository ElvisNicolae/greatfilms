import { FETCH_ACCOUNT } from "../actions/types";

const getAccountReducer = (state = {}, action) => {
    switch(action.type){
        case FETCH_ACCOUNT:
            return action.payload;
        default: 
            return state;
    }
}

export default getAccountReducer;