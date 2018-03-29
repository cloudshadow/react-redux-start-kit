import React from 'react';
import { Route } from 'react-router';
// import App from './containers/App';
import HomePage from './containers/HomePage'; // eslint-disable-line import/no-named-as-default

// export const routes = store => {
export const routes = () => {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
    </div>
  );
};
