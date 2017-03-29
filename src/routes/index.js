import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import App from '../components/App'
import MovieList from '../containers/movieList'
export default (
    <Route path='/' component={App} >
        <IndexRoute component={MovieList} />
    </Route>
)