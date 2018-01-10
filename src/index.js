/* eslint-disable import/default */

import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import {routes} from './routes';
import configureStore from './store/configureStore';
require('./favicon.ico');
import './index.scss';
import { syncHistoryWithStore } from 'react-router-redux';
const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);
render(
  <Provider store={store}>
    <Router history={history} routes={routes(store)}/>
  </Provider>, document.getElementById('app')
);
