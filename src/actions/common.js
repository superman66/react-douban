import { TOGGLE_SIDE_BAR, LOADING_STATUS } from '../constants/actionTypes'
import { createAction } from 'redux-actions'

export const loadingStatus = createAction(LOADING_STATUS)
export const toggleSideBar = createAction(TOGGLE_SIDE_BAR)