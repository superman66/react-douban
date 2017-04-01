import React, { Component } from 'react';
import Header from './Header'
import MovieList from '../containers/movieList'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
         {this.props.children}
      </div>
    );
  }
}

export default App;
