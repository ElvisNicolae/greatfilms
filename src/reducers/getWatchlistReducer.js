import { FETCH_WATCHLIST, RESET_ACTION } from "../actions/types";

const getWatchlistReducer = (state = [], action) => {
    switch(action.type){
        case FETCH_WATCHLIST:
            return [...state, ...action.payload];
        case RESET_ACTION:
            return [];
        default: 
            return state;
    }
}

export default getWatchlistReducer;