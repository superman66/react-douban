import React from 'react'
import {connect} from 'react-redux'
import MovieListView from '../components/MovieListView'
import * as movieListAction from '../actions/movieList'

function mapState2Props(state){
    return {
        isFetch: false,
        movieList: []
    }
}

function mapDispacth2Props(dispatch){
    return {
        onFetchMovieListByType: movieListAction.fetchMovieListByType
    }
}

export default connect(
    mapState2Props,
    mapDispacth2Props
)(MovieListView)