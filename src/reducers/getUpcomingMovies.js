import { FETCH_UPCOMING } from "../actions/types";

const getUpcomingMovies = (state = [], action) => {
    switch(action.type){
        case FETCH_UPCOMING: 
            return [...state, ...action.payload];
        default:
            return state;
    }
}

export default getUpcomingMovies;