import { FETCH_TRENDING_MOVIES, RESET_ACTION } from '../actions/types';

const trendingMovies = (state = [], action)=>{
    switch(action.type){
        case FETCH_TRENDING_MOVIES:
            return [...state, ...action.payload];
        case RESET_ACTION:
            return [];
        default:
            return state;
    }
}

export default trendingMovies;
