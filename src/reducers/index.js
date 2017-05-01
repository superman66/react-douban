import { combineReducers } from 'redux'
import movieReducer from './movie'
import movieListReducer from './movieList'
import searchReducer from './search'
import commonReducer from './common'
import { ITEMS_HAS_ERRORED, ITEMS_IS_LOADING, ITEMS_FETCH_SUCCESS } from '../actions/movieList'

// 此时的state分为了两部分
export default combineReducers({
    commonReducer,
    movieReducer,
    movieListReducer,
    searchReducer
})