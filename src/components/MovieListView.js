import React, { Component } from 'react';
import { Link } from 'react-router'
import Loading from './Loading'
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
            return <Loading show={isLoading} />
        }
        return (
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        <Link to={`/movie/${item.id}`} >
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        )
    }
}

export default MovieList;