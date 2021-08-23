import { FETCH_MOVIE } from '../actions/types';

const getMovie = (state = {}, action) => {
    switch(action.type){
        case FETCH_MOVIE:
            return action.payload;
        default:
            return state;
    }
};

export default getMovie;
