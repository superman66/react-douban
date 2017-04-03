import { combineReducers } from 'redux'
import { ITEMS_HAS_ERRORED, ITEMS_IS_LOADING, ITEMS_FETCH_SUCCESS } from '../actions/movieList'
import { TOGGLE_SIDE_BAR } from '../constants/actionTypes'


export function toggleSideBar(state = false, action) {
    switch (action.type) {
        case TOGGLE_SIDE_BAR: {
            return action.open
        }
        default:
            return state;
    }
}
export function itemHasErrored(state = false, action) {
    switch (action.type) {
        case ITEMS_HAS_ERRORED: {
            return action.hasErrored;
        }
        default:
            return state;
    }
}


export function itemIsLoading(state = false, action) {
    switch (action.type) {
        case ITEMS_IS_LOADING: {
            return action.isLoading;
        }
        default: {
            return state;
        }
    }
}

export function items(state = [], action) {
    switch (action.type) {
        case ITEMS_FETCH_SUCCESS: {
            return [...action.items]
        }
        default: {
            return state;
        }
    }
}

export default combineReducers({
    hasErrored: itemHasErrored,
    isLoading: itemIsLoading,
    items,
    open: toggleSideBar
});

// selector
export const getState = (state) => {
    return state.movieListReducer
}

