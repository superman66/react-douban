/*import fetch from 'isomorphic-fetch'
import {
    FETCH_MOVIE_LIST_FAILURE,
    FETCH_MOVIE_LIST_SUCCESS,
    FETCH_MOVIE_LIST_REQUEST
} from '../constant/actionTypes'
import HOST from '../constant/API'

export function requestMovieList() {
    return {
        type: FETCH_MOVIE_LIST_REQUEST,
    }
}

export function receiveMovieList(data) {
    return {
        type: FETCH_MOVIE_LIST_SUCCESS,
        list: data.list
    }
}

export function errorMovieList(err) {
    return {
        type: FETCH_MOVIE_LIST_FAILURE,
        err
    }
}

export function fetchMovieListByType() {
    return function (dispatch) {
        // 首次dispatch 更新应用的state来通知
        // API 请求发起了
        // dispatch(requestMovieList())
        // console.log('request')
        return fetch('https://node-douban-api.herokuapp.com/movie/in_theater?start=0&count=20')
            .then(response => response.json())
            .then(json => dispatch(receiveMovieList(json)))
            // .catch(err => dispatch(errorMovieList(err)))
    }
}*/

export const ITEMS_HAS_ERRORED = 'ITEMS_HAS_ERRORED';
export const ITEMS_IS_LOADING = 'ITEMS_IS_LOADING';
export const ITEMS_FETCH_SUCCESS = 'ITEMS_FETCH_SUCCESS';

export const itemsHasErrored = bool => {
    return {
        type: ITEMS_HAS_ERRORED,
        hasErrored: bool
    }
}

export const itemIsLoading = bool => {
    return {
        type: ITEMS_IS_LOADING,
        isLoading: bool
    }
}

export function itemsFetchSuccess(items) {
    return {
        type: ITEMS_FETCH_SUCCESS,
        items
    }
}

export function itemsFetchData(url) {
    return (dispatch) => {
        // api 请求前
        dispatch(itemIsLoading(true));

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(itemIsLoading(false))
                return response;
            })
            .then(response => response.json())
            .then(items => {
                console.log(items);
                dispatch(itemsFetchSuccess(items.subjects))})
            .catch(() => dispatch(itemsHasErrored(true)))
    }
}