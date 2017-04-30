import fetch from 'isomorphic-fetch'
import {createAction } from 'redux-actions'
import { FETCH_MOVIE } from '../constants/actionTypes'
import * as API from '../constants/API'

const fetchRequest = createAction(FETCH_MOVIE.REQUEST)
const fetchSuccess = createAction(FETCH_MOVIE.SUCCESS)

export const fetchData = (id) => (dispatch) => {
    dispatch(fetchRequest(true));
    return fetch(`${API.FETCH_MOVIE_BY_ID}/${id}`)
    .then((response) => {
        dispatch(fetchRequest(false))
        return response
    })   
    .then((response) => response.json())
    .then((data) => {
        dispatch(fetchSuccess(data))
    })
    .catch()
}