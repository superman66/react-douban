import fetch from 'isomorphic-fetch'
import { FETCH_MOVIE } from '../constants/actionTypes'

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

export const fetchData = (url) => (dispatch) => {
    dispatch(fetchRequest(true));
    return fetch(url)
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