import { combineReducers } from 'redux'
import { TOGGLE_SIDE_BAR } from '../constants/actionTypes'

export const toggleSideBar = (state = false, action) => {
    switch (action.type) {
        case TOGGLE_SIDE_BAR: {
            return action.open
        }
        default: {
            return state;
        }
    }
}

export default combineReducers({
    toggleSideBar
})

export const getState = (state) => {
    // 这里rreducer名字 sideBarReducer 来自于 /reducers/index.js中定义的
    return state.sideBarReducer;
}