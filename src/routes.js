import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage'; // eslint-disable-line import/no-named-as-default

// export const routes = store => {
export const routes = () => {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={HomePage}/>
    </Route>
  );
};
