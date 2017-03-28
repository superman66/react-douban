import { createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { logger } from 'redux-logger'
import rootReducer from '../reducers/MovieList' 

const middleware = [thunk, logger];
export default function configureStore(initialState){
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(...middleware)
    )
}