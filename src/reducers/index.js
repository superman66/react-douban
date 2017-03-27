import { combineReducers } from 'redux'
import {
    // FETCH_MOVIE_LIST_FAILURE,
    FETCH_MOVIE_LIST_SUCCESS,
    FETCH_MOVIE_LIST_REQUEST
} from '../constant/actionTypes'

const initalState = {
    isFetch: false,
    list: []
}

function post(state = initalState, action) {
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

const rootReducer = combineReducers({
    post
})

export default rootReducer;