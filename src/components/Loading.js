import React, { PropTypes } from 'react'
import loadingImg from '../loading-bars.svg'

const propTypes = {
    show: PropTypes.bool.isRequired,
}
const Loading = props => (
    <div>
        {props.show ? <img className="loading" src={loadingImg} alt="" /> : ''}
    </div>
)

Loading.propTypes = propTypes

export default Loading
