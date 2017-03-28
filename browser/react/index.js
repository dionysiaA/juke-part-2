import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';
import { Router, Route, hashHistory } from 'react-router';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={AppContainer} >
    {/*this where our children will be added*/}
    </Route>
  </Router>,
  document.getElementById('app')
);
