import React, { Component, PropTypes } from 'react';

class Movie extends Component {
    render() {
        const {item} = this.props
        return (
            <li>
                {item.name}
            </li>
        )
    }
}

Movie.PropTypes = {
    item: PropTypes.object.isRequired
}

export default Movie;