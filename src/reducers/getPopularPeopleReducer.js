import { FETCH_POPULAR_PEOPLE, RESET_ACTION } from "../actions/types";

const getPopularPeopleReducer = (state = [], action) => {
    switch(action.type){
        case FETCH_POPULAR_PEOPLE:
            return [...state, ...action.payload];
        case RESET_ACTION:
            return [];
        default: 
            return state;
    }
}

export default getPopularPeopleReducer;