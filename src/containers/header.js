import React from 'react'
import { connect } from 'react-redux'
import HeaderView from '../components/Header'
import { toggleSideBar } from '../actions/header'
import * as selector from '../reducers/movie'

const mapState2Props = (state) => {
    return {
       open: state.open
    }
}

const mapDispatch2Props = (dispatch) => {
    return {
        toggleBar: (bool) => dispatch(toggleSideBar(bool))
    }
}

export default connect(
    mapState2Props,
    mapDispatch2Props
)(HeaderView)