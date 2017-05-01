import * as API from '../constants/API'
import { createAction } from 'redux-actions'
import { FETCH_MOVIE_LIST } from '../constants/actionTypes'
import { loadingStatus } from './common'

const fetchSuccess = createAction(FETCH_MOVIE_LIST.SUCCESS)

export function fetchData(type = API.MOVIE_TYPE.IN_THEATERS) {
    return (dispatch) => {
        // api 请求前
        dispatch(loadingStatus(true));

        fetch(`${API.FETCH_MOVIE_LIST}/${type}?start=0&count=10`)
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