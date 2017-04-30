import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import MovieListView from '../components/movie//MovieListView'
import * as actionsCreators from '../actions/movieList'
import * as selector from '../reducers/movieList'

const mapState2Props = state => {
    return {
        items: selector.getState(state).items,
        loading: selector.getState(state).loading,
    }
}

const mapDispacth2Props = dispatch => {
    const actions = bindActionCreators(actionsCreators, dispatch);
    return {
        fetchData: actions.fetchData,
    };
}

export default connect(
    mapState2Props,
    mapDispacth2Props
)(MovieListView)
