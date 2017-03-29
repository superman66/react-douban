import React from 'react'
import { connect} from 'react-redux'
import MovieView from '../components/MovieView'
import { fetchData } from '../actions/movie'
import * as selector from '../reducers/movieList'

const mapState2Props = (state) => {
    return {
        data: selector.getState(state).fetchData,
        looading: selector.getState(state).fetchRequest,
        hasError: selector.getState(state).fetchError
    }
}

const mapDispatch2Props = (dispatch) => {
    return {
        fetchData: (url) => {
            dispatch(fetchData(url))
        }
    }
}

export default connect(
    mapState2Props,
    mapDispatch2Props
)(MovieView)