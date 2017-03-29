import * as API from '../constants/API'
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

export function itemsFetchData() {
    return (dispatch) => {
        // api 请求前
        dispatch(itemIsLoading(true));

        fetch(API.FETCH_MOVIE_LIST)
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