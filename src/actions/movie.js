import fetch from 'isomorphic-fetch'
import { FETCH_MOVIE } from '../constants/actionTypes'
import * as API from '../constants/API'

export const fetchRequest = (bool) => {
    return {
        type: FETCH_MOVIE.REQUEST,
        loading: bool
    }
}

export const fetchError = (bool) => {
    return {
        type: FETCH_MOVIE.FAILURE,
        hasError: bool
    }
}

export const fetchSuccess = (data) => {
    return {
        type: FETCH_MOVIE.SUCCESS,
        data
    }
}

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
    .catch( () => {
        dispatch(fetchError(true));
    })
}