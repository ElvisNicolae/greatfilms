import { FETCH_TRENDING_MOVIES } from '../actions/types';

const trendingMovies = (state = [], action)=>{
    switch(action.type){
        case FETCH_TRENDING_MOVIES:
            return action.payload;
        default:
            return state;
    }
}

export default trendingMovies;
