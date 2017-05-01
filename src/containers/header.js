import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import HeaderView from '../components/Header'
import * as actionCreators from '../actions/common'
import * as selector from '../reducers/common'

const mapState2Props = (state) => {
    return {
       open: selector.getState(state).open
    }
}

const mapDispatch2Props = (dispatch) => {
    const actions = bindActionCreators(actionCreators, dispatch)
    return {
        toggleBar: actions.toggleSideBar
    }
}

export default connect(
    mapState2Props,
    mapDispatch2Props
)(HeaderView)