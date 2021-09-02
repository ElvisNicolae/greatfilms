import { FETCH_TOP_RATED_MOVIES, RESET_ACTION } from '../actions/types';

const topRatedMovies = (state = [], action) => {
    switch(action.type){
        case FETCH_TOP_RATED_MOVIES:
            return [...state, ...action.payload];
        case RESET_ACTION:
            return [];
        default:
            return state;
    }
};
export default topRatedMovies;