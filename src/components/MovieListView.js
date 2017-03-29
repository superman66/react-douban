import React, { Component } from 'react';
import { Link } from 'react-router'
class MovieList extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const { fetchData } = this.props;
        fetchData();
    }
    render() {
        const { hasErrored, isLoading, items } = this.props;
        if (hasErrored) {
            return <h4>Soory! Errored </h4>
        }
        if (isLoading) {
            return <p>loading....</p>
        }
        return (
            <ul>
                {items.map(item => (
                    <Link to={`/movie/${item.id}`} key={item.id}>
                        {item.title}
                    </Link>
                ))}
            </ul>
        )
    }
}

export default MovieList;