import * as API from '../constants/API'
export const ITEMS_HAS_ERRORED = 'ITEMS_HAS_ERRORED';
export const ITEMS_IS_LOADING = 'ITEMS_IS_LOADING';
export const ITEMS_FETCH_SUCCESS = 'ITEMS_FETCH_SUCCESS';
import { TOGGLE_SIDE_BAR } from '../constants/actionTypes'

export const toggleSideBar = (bool) => {
    return {
        type: TOGGLE_SIDE_BAR,
        open: bool
    }
}

export const itemsHasErrored = bool => {
    return {
        type: ITEMS_HAS_ERRORED,
        hasErrored: bool
    }
}

export const itemIsLoading = bool => {
    return {
        type: ITEMS_IS_LOADING,
        isLoading: bool
    }
}

export function itemsFetchSuccess(items) {
    return {
        type: ITEMS_FETCH_SUCCESS,
        items
    }
}

export function itemsFetchData(type = API.MOVIE_TYPE.IN_THEATERS) {
    return (dispatch) => {
        // api 请求前
        dispatch(itemIsLoading(true));

        fetch(`${API.FETCH_MOVIE_LIST}/${type}?start=0&count=10`)
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(itemIsLoading(false))
                return response;
            })
            .then(response => response.json())
            .then(items => {
                dispatch(itemsFetchSuccess(items.subjects))})
            .catch(() => dispatch(itemsHasErrored(true)))
    }
}