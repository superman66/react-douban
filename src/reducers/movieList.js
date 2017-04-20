import { combineReducers } from 'redux'
import { FETCH_MOVIE_LIST } from '../constants/actionTypes';


export function fetchError(state = false, action) {
    switch (action.type) {
        case FETCH_MOVIE_LIST.FAILURE: {
            return action.hasError;
        }
        default:
            return state;
    }
}


export function fetchRequest(state = false, action) {
    switch (action.type) {
        case FETCH_MOVIE_LIST.REQUEST: {
            return action.loading;
        }
        default: {
            return state;
        }
    }
}

export function fetchData(state = [], action) {
    switch (action.type) {
        case FETCH_MOVIE_LIST.SUCCESS: {
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
    return state.movieListReducer
}

