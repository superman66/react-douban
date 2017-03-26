import React from 'react'
import { Router, Route, hashHistory } from 'react-router'
import App from '../components/App'
export default (
    <Router history={hashHistory}>
        <Route path='/' component={App}/>
    </Router>
)