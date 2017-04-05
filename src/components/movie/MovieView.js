import React, { Component, PropTypes } from 'react';
import Loading from '../Loading'
import GoBackBar from '../GoBackBar'

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
                    <GoBackBar goBack={this.props.router.goBack} title={data.title}/>
                    <section>
                        {data.title}
                    </section>
                </div>
            )
        }
    }
}

MovieView.propTypes = {
    loading: PropTypes.bool.isRequired,
    hasError: PropTypes.bool.isRequired,
    data: PropTypes.object.isRequired
}
export default MovieView;