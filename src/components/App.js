import React, { Component, PropTypes } from 'react';
import MovieList from '../containers/movieList'

class App extends Component {
  getChildContext(){
    return {router: this.props.router};
  }
  render() {
    return (
      <div>
         {this.props.children}
      </div>
    );
  }
}

App.childContextTypes = {
  router: PropTypes.object,
}

export default App;
