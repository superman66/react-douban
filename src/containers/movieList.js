import React from 'react';
import { connect } from 'react-redux'
import MovieListView from '../components/movie//MovieListView'
import { itemsFetchData, toggleSideBar } from '../actions/movieList'
import * as selector from '../reducers/movieList'

const mapState2Props = state => {
    return {
        items: selector.getState(state).items,
        isLoading: selector.getState(state).isLoading,
        hasErrored: selector.getState(state).hasErrored,
    }
}

const mapDispacth2Props = dispatch => {
    return {
        fetchData: (type) => dispatch(itemsFetchData(type)),
    };
}

export default connect(
    mapState2Props,
    mapDispacth2Props
)(MovieListView)
