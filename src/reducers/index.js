import { combineReducers } from 'redux'
import movieReducer from './movie'
import movieListReducer from './movieList'

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

// 此时的state分为了两部分
export default combineReducers({
    open: toggleSideBar,
    movieReducer,
    movieListReducer,
})