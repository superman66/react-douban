import * as API from '../constants/API'
import { createAction } from 'redux-actions'
import { SEARCH_MOVIE } from '../constants/actionTypes';

const fetchRequest = createAction(SEARCH_MOVIE.REQUEST)
const fetchSuccess = createAction(SEARCH_MOVIE.SUCCESS)


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
            .catch()
    }
}