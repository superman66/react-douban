import React, { Component, PropTypes } from 'react';

class Movie extends Component {
    componentWillMount() {
        const { fetchData, params } = this.props;
        fetchData(params.id);
    }
    render() {
        const { data, loading, hasError } = this.props;
        if (loading) {
            return <p>loading</p>
        }
        return (
            <div>{data}</div>
        )
    }
}

Movie.PropTypes = {
    item: PropTypes.object.isRequired
}

export default Movie;