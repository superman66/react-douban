import { combineReducers } from 'redux'
import movieReducer from './movie'
import movieListReducer from './movieList'

// 此时的state分为了两部分
export default combineReducers({
    movieReducer,
    movieListReducer
})