import { SEARCH_MOVIE, RESET_ACTION } from "../actions/types";

const searchMovieReducer = (state = [], action) => {
    switch(action.type){
        case SEARCH_MOVIE:
            return [...state, ...action.payload];
        case RESET_ACTION: 
            return [];
        default:
            return state;
    }
}

export default searchMovieReducer;