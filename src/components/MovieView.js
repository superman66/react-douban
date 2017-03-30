import React, { Component, PropTypes } from 'react';
import Loading from './Loading'

class MovieView extends Component {

    componentWillMount() {
        const { fetchData, params } = this.props;
        fetchData(params.id);
    }
    render() {
        const { data, loading, hasError } = this.props;
        if (loading) {
            return <Loading show={loading} />
        }
        else {
            return (
                <div>{data.title}</div>
            )
        }
    }
}


export default MovieView;