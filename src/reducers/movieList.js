import { combineReducers } from 'redux'
import { FETCH_MOVIE_LIST } from '../constants/actionTypes';

export function fetchData(state = [], action) {
    switch (action.type) {
        case FETCH_MOVIE_LIST.SUCCESS: {
            return [...action.payload]
        }
        default: {
            return state;
        }
    }
}

export default combineReducers({
    items: fetchData,
});

// selector
export const getState = (state) => {
    return state.movieListReducer
}

