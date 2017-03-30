import React, { Component, PropTypes } from 'react';
import Loading from './Loading'

class MovieView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        }
    }
    componentWillMount() {
        const { fetchData, params } = this.props;
        fetchData(params.id);
    }
    componentWillUpdate(nextProps, nextState) {
        if (nextProps.data !== this.props.data) {
            const data = { ...nextProps.data };
            this.setState({ data });
        }
    }
    render() {
        const { loading, hasError } = this.props;
        const { data } = this.state;
        if (loading) {
            return <Loading show={loading} />
        }
        else {
            return (
                <div>
                    <br/>   
                    {data.title}</div>
            )
        }
    }
}


export default MovieView;