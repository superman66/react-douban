import * as API from '../constants/API'
import { SEARCH_MOVIE } from '../constants/actionTypes';


export const fetchError = bool => {
    return {
        type: SEARCH_MOVIE.FAILURE,
        hasError: bool
    }
}

export const fetchRequest = bool => {
    return {
        type: SEARCH_MOVIE.REQUEST,
        loading: bool
    }
}

export function fetchSuccess(items) {
    return {
        type: SEARCH_MOVIE.SUCCESS,
        items
    }
}


export function searchMovie(params) {
    let query = '?';
    for (let i in params) {
        query += `${i}=${params[i]}&`;
    }
    return (dispatch) => {
        // api 请求前
        dispatch(fetchRequest(true));

        fetch(`${API.SEARCH_MOVIE}${query}`)
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(fetchRequest(false))
                return response;
            })
            .then(response => response.json())
            .then(items => {
                dispatch(fetchSuccess(items.subjects))
            })
            .catch(() => dispatch(fetchError(true)))
    }
}