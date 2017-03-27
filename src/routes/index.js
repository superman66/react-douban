import React from 'react'
import { Router, Route, hashHistory } from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import App from '../components/App'
import rootReduces from './reducers/index'

let store = createStore(
  rootReduces,
  applyMiddleware(
    thunkMiddleware
  )
)
export default (
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path='/' component={App} />
        </Router>
    </Provider>
)