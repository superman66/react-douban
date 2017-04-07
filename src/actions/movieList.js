import * as API from '../constants/API'
import { FETCH_MOVIE_LIST } from '../constants/actionTypes';


export const fetchError = bool => {
    return {
        type: FETCH_MOVIE_LIST.FAILURE,
        hasError: bool
    }
}

export const fetchRequest = bool => {
    return {
        type: FETCH_MOVIE_LIST.REQUEST,
        loading: bool
    }
}

export function fetchSuccess(items) {
    return {
        type: FETCH_MOVIE_LIST.SUCCESS,
        items
    }
}

export function fetchData(type = API.MOVIE_TYPE.IN_THEATERS) {
    return (dispatch) => {
        // api 请求前
        dispatch(fetchRequest(true));

        fetch(`${API.FETCH_MOVIE_LIST}/${type}?start=0&count=10`)
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(fetchRequest(false))
                return response;
            })
            .then(response => response.json())
            .then(items => {
                dispatch(fetchSuccess(items.subjects))})
            .catch(() => dispatch(fetchError(true)))
    }
}