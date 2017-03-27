import React, { Component } from 'react';
import Movie from './Movie'

class MovieList extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const { onFetchMovieListByType } = this.props;
        onFetchMovieListByType();
    }
    renderMovieList(list) {
        return list.map((item, index) =>
            <Movie item={item} key={index} />
        )
    }
    render() {
        const { isFetch, movieList } = this.props;
        return(
            <div>
                loading
            </div>
        )
        // // isFetch ? (
        //     (<h4>loading</h4>);
        // /*) : (
        //         <ul>
        //             {this.renderMovieList(movieList)}
        //         </ul>
        //     )*/


    }
}

export default MovieList;