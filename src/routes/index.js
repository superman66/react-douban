import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import App from '../components/App'
import MovieList from '../containers/movieList'
import Movie from '../containers/movie'
import About from '../components/About'
import Search from '../components/Search'

export default (
    <Route path='/' component={App} >
        <IndexRoute component={MovieList} />
        <Route path="/movie/:id" component={Movie} />
        <Route path="/about" component={About}/>
        <Route path="/search" component={Search}/>
    </Route>
)