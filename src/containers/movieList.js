import React from 'react';
import { connect } from 'react-redux'
import MovieListView from '../components/MovieListView'
import { itemsFetchData } from '../actions/movieList'

const mapState2Props = state => {
    return {
        items: state.items,
        isLoading: state.itemIsLoading,
        hasErrored: state.itemHasErrored
    }
}

const mapDispacth2Props = dispatch => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url))
    };
}

export default connect(
    mapState2Props,
    mapDispacth2Props
)(MovieListView)

/*import React from 'react'
import { connect } from 'react-redux'
import MovieListView from '../components/MovieListView'
import * as movieListAction from '../actions/movieList'

function mapState2Props(state) {
    console.log(state);
    // const { fetchMovieListByType } = state;
    // const {
    //     isFetch,
    //     movieList
    // } = fetchMovieListByType();
    return {
        isFetch: false,
        movieList:[]
    }
}

function mapDispacth2Props(dispatch) {
    return {
        onFetchMovieListByType: dispatch(movieListAction.fetchMovieListByType)
    }
}

export default connect(
    mapState2Props,
    mapDispacth2Props
)(MovieListView)*/