import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';
import { Router, Route, hashHistory, Redirect } from 'react-router';
import Albums from './components/Albums.js';
import Album from './components/Album';

ReactDOM.render(
  <Router history={hashHistory}>
    <Redirect from='/' to='/albums' />
    <Route path="/" component={AppContainer}>
      <Route path='/albums' component={Albums} />
      <Route path="albums/:albumId" component={Album} />
    </Route>
  </Router>,
  document.getElementById('app')
);
