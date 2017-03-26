import React, { Component } from 'react';
import Movie from './Movie'

const movieList = [
    {id:1, name: 'movie1'},
    {id:2, name: 'movie1'},
    {id:3, name: 'movie1'},
    {id:4, name: 'movie1'},
]
class MovieList extends Component {
    renderMovieList(list){
        return list.map((item, index) =>
            <Movie item={item} key={index} />
        )
    }
    render(){
        return (
            <ul>
                {this.renderMovieList(movieList)}
            </ul>
        );
    }
}

export default MovieList;