import { FETCH_ACCOUNT_STATES } from "../actions/types";

const getAccountStatesReducer = (state = {}, action) => {
    switch(action.type){
        case FETCH_ACCOUNT_STATES:
            return action.payload;
        default: 
            return state;
    }
}

export default getAccountStatesReducer;