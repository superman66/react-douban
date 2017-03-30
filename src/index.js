import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux'
import App from './components/App'
import routes from './routes/index'
import configureStore from './store/configureStore'

injectTapEventPlugin();
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Router history={hashHistory} routes={routes} />
    </MuiThemeProvider>
  </Provider>
  ,
  document.getElementById('root')
);
