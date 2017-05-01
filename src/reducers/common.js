import { combineReducers } from 'redux'
import { TOGGLE_SIDE_BAR, LOADING_STATUS } from '../constants/actionTypes'


export function loading(state = false, action) {
    switch (action.type) {
        case LOADING_STATUS: {
            return action.payload
        }
        default: {
            return state;
        }
    }
}
export function toggleSideBar(state = false, action) {
    switch (action.type) {
        case TOGGLE_SIDE_BAR: {
            return action.payload
        }
        default:
            return state;
    }
}

export default combineReducers({
    open: toggleSideBar,
    loading: loading
});

// selector
export const getState = (state) => {
    return state.commonReducer
}