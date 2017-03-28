import { combineReducers } from 'redux'
import { ITEMS_HAS_ERRORED, ITEMS_IS_LOADING, ITEMS_FETCH_SUCCESS } from '../actions/movieList'

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
            return action.items;
        }
        default: {
            return state;
        }
    }
}

export default combineReducers({
    itemHasErrored,
    itemIsLoading,
    items
})

/*import { combineReducers } from 'redux'
import {
    // FETCH_MOVIE_LIST_FAILURE,
    FETCH_MOVIE_LIST_SUCCESS,
    FETCH_MOVIE_LIST_REQUEST
} from '../constant/actionTypes'

const initalState = {
    isFetch: false,
    list: []
}

function fetchMovieListByType(state = initalState, action) {
    switch (action.type) {
        case FETCH_MOVIE_LIST_REQUEST: {
            return {
                ...state,
                isFetch: true
            }
        }
        case FETCH_MOVIE_LIST_SUCCESS: {
            return {
                ...state,
                isFetch: false,
                list: action.list
            }
        }
        default:{
            return state
        }
    }

}

const movieListReducer = combineReducers({
    fetchMovieListByType
})

export default movieListReducer;*/

