import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import MovieView from '../components/movie/MovieView'
import * as actionCreators from '../actions/movie'
import * as selector from '../reducers/movie'

const mapState2Props = (state) => {
    return {
        data: selector.getState(state).fetchData,
        loading: selector.getState(state).fetchRequest,
        hasError: selector.getState(state).fetchError
    }
}

const mapDispatch2Props = (dispatch) => {
    const actions = bindActionCreators(actionCreators, dispatch)
    return {
        fetchData: actions.fetchData
    }
}

export default connect(
    mapState2Props,
    mapDispatch2Props
)(MovieView)