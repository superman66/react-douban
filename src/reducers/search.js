import { combineReducers } from 'redux'
import { SEARCH_MOVIE } from '../constants/actionTypes';

export function fetchError(state = false, action) {
    switch (action.type) {
        case SEARCH_MOVIE.FAILURE: {
            return action.hasError;
        }
        default:
            return state;
    }
}


export function fetchRequest(state = false, action) {
    switch (action.type) {
        case SEARCH_MOVIE.REQUEST: {
            return action.loading;
        }
        default: {
            return state;
        }
    }
}

export function fetchData(state = [], action) {
    switch (action.type) {
        case SEARCH_MOVIE.SUCCESS: {
            return [...action.items]
        }
        default: {
            return state;
        }
    }
}

export default combineReducers({
    hasError: fetchError,
    loading: fetchRequest,
    items: fetchData,
});

// selector
export const getState = (state) => {
    return state.searachReducer
}

