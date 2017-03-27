import fetch from 'isomorphic-fetch'
import {
    // FETCH_MOVIE_LIST_FAILURE,
    FETCH_MOVIE_LIST_SUCCESS,
    FETCH_MOVIE_LIST_REQUEST
} from '../constant/actionTypes'
import HOST from '../constant/API'

export function requestMovieList(type) {
    return {
        type: FETCH_MOVIE_LIST_REQUEST,
        type
    }
}

export function receiveMovieList(data) {
    return {
        type: FETCH_MOVIE_LIST_SUCCESS,
        list
    }
}

export function errorMovieList(err) {
    return {
        type: FETCH_MOVIE_LIST_FAILURE,
        err
    }
}

export function fetchMovieList(type) {
    return function (dispatch) {
        // 首次dispatch 更新应用的state来通知
        // API 请求发起了
        dispatch(requestMovieList(type))
        return fetch(HOST + `/movie/${type}?start=0&count=20`)
            .then(response => response.json())
            .then(json => dispatch(receiveMovieList(json)))
            .catch(err => dispatch(errorMovieList(err)))
    }
}
