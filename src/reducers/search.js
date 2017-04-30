import { combineReducers } from 'redux'
import { SEARCH_MOVIE } from '../constants/actionTypes';

export function fetchRequest(state = false, action) {
    switch (action.type) {
        case SEARCH_MOVIE.REQUEST: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}

export function fetchData(state = [], action) {
    switch (action.type) {
        case SEARCH_MOVIE.SUCCESS: {
            return [...action.payload]
        }
        default: {
            return state;
        }
    }
}

export default combineReducers({
    loading: fetchRequest,
    items: fetchData,
});

// selector
export const getState = (state) => {
    return state.searchReducer
}

