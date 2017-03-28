import React, { Component } from 'react';
import Movie from './Movie'

class MovieList extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const { fetchData } = this.props;
        const url = 'https://node-douban-api.herokuapp.com/movie/in_theaters?start=0&count=9'
        fetchData(url);
    }
    /*    renderMovieList(list) {
            return list.map((item, index) =>
                <Movie item={item} key={index} />
            )
        }*/
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
                    <li key={item.id}>
                        {item.title}
                    </li>
                ))}
            </ul>
        )
    }
}

export default MovieList;