import { FETCH_UPCOMING, RESET_ACTION } from "../actions/types";

const getUpcomingMovies = (state = [], action) => {
    switch(action.type){
        case FETCH_UPCOMING: 
            return [...state, ...action.payload];
        case RESET_ACTION: 
            return [];
        default:
            return state;
    }
}

export default getUpcomingMovies;