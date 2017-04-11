import React from 'react';
import { connect } from 'react-redux'
import SearchView from '../components/Search'
import { searchMovie } from '../actions/search'
import * as selector from '../reducers/search'

const mapState2Props = state => {
    return {
        items: selector.getState(state).items,
        loading: selector.getState(state).loading,
        hasError: selector.getState(state).hasError,
    }
}

const mapDispacth2Props = dispatch => {
    return {
        searchMovie: (params) => dispatch(searchMovie(params)),
    };
}

export default connect(
    mapState2Props,
    mapDispacth2Props
)(SearchView)
