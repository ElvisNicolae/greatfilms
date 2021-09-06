import { FETCH_RECOMMENDED, RESET_ACTION } from "../actions/types";

const getRecommended = (state = [], action) => {
    switch(action.type){
        case FETCH_RECOMMENDED: 
            return [...state, ...action.payload];
        case RESET_ACTION: 
            return [];
        default:
            return state;
    }
}

export default getRecommended;