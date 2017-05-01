import fetch from 'isomorphic-fetch'
import {createAction } from 'redux-actions'
import { FETCH_MOVIE } from '../constants/actionTypes'
import * as API from '../constants/API'
import { loadingStatus } from './common'

const fetchSuccess = createAction(FETCH_MOVIE.SUCCESS)

export const fetchData = (id) => (dispatch) => {
    dispatch(loadingStatus(true));
    return fetch(`${API.FETCH_MOVIE_BY_ID}/${id}`)
    .then((response) => {
        dispatch(loadingStatus(false))
        return response
    })   
    .then((response) => response.json())
    .then((data) => {
        dispatch(fetchSuccess(data))
    })
    .catch()
}