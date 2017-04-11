import React from 'react';
import { connect } from 'react-redux'
import SearchView from '../components/Search'
import { fetchMovieById } from '../actions/movieList'
import * as selector from '../reducers/movieList'

const mapState2Props = state => {
    return {
        items: selector.getState(state).items,
        loading: selector.getState(state).loading,
        hasError: selector.getState(state).hasError,
    }
}

const mapDispacth2Props = dispatch => {
    return {
        saerchMovie: (params) => dispatch(saerchMovie(params)),
    };
}

export default connect(
    mapState2Props,
    mapDispacth2Props
)(SearchView)
