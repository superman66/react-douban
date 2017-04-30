import { combineReducers } from 'redux'
import { FETCH_MOVIE } from '../constants/actionTypes'

export const fetchRequest = (state = false, action) => {
    switch (action.type) {
        case FETCH_MOVIE.REQUEST: {
            return action.payload
        }
        default: {
            return state;
        }
    }
}

export const fetchData = (state = {}, action) => {
    switch (action.type) {
        case FETCH_MOVIE.SUCCESS: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}

export default combineReducers({
    fetchRequest,
    fetchData
})

// selector 用于获取当前 state
export const getState = (state) => {
    return state.movieReducer;
}