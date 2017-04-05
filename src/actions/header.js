import { TOGGLE_SIDE_BAR } from '../constants/actionTypes'

export const toggleSideBar = (bool) => {
    return {
        type: TOGGLE_SIDE_BAR,
        open: bool
    }
}