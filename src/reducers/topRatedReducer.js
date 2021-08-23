import { FETCH_TOP_RATED_MOVIES } from '../actions/types';

const topRatedMovies = (state = [], action) => {
    switch(action.type){
        case FETCH_TOP_RATED_MOVIES:
            return action.payload;
        default:
            return state;
    }
};
export default topRatedMovies;