import { createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { logger } from 'redux-logger'
import rootReducer from '../reducers/index' 

const middleware = [thunk];
if(process.env.NODE_ENV !== 'production'){
    middleware.push(logger);
}
export default function configureStore(initialState){
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(...middleware)
    )
}