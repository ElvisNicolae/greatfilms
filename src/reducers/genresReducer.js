import { FETCH_GENRES } from '../actions/types';

const genres = (state = [], action) => {
    switch(action.type){
        case FETCH_GENRES:
            return action.payload;
        default:
            return state;
    }
};

export default genres;
