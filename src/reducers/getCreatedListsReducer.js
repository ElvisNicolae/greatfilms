import { FETCH_CREATED_LISTS } from "../actions/types";

const getCreatedListsReducer = (state = [], action) => {
    switch(action.type){
        case FETCH_CREATED_LISTS:
            return action.payload;
        default: 
            return state;
    }
}

export default getCreatedListsReducer;