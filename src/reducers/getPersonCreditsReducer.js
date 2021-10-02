import { FETCH_PERSON_CREDITS, RESET_ACTION } from "../actions/types";

const getPersonCreditsReducer = (state = [], action) => {
    switch(action.type){
        case FETCH_PERSON_CREDITS:
            return [...state, ...action.payload];
        case RESET_ACTION:
            return [];
        default:
            return state;
    }
}

export default getPersonCreditsReducer;