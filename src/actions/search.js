import * as API from '../constants/API'
import { createAction } from 'redux-actions'
import { SEARCH_MOVIE } from '../constants/actionTypes';
import { loadingStatus } from './common'

const fetchSuccess = createAction(SEARCH_MOVIE.SUCCESS)


export function searchMovie(params) {
    let query = '?';
    for (let i in params) {
        query += `${i}=${params[i]}&`;
    }
    return (dispatch) => {
        // api 请求前
        dispatch(loadingStatus(true));

        fetch(`${API.SEARCH_MOVIE}${query}`)
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(loadingStatus(false))
                return response;
            })
            .then(response => response.json())
            .then(items => {
                dispatch(fetchSuccess(items.subjects))
            })
            .catch()
    }
}