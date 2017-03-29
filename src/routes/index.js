import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import App from '../components/App'
import MovieList from '../containers/movieList'
import Movie from '../containers/movie'
export default (
    <Route path='/' component={App} >
        <IndexRoute component={MovieList} />
        <Route path="/movie/:id" component={Movie} />
    </Route>
)