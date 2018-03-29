import { combineReducers } from 'redux';
import homeState from './homeReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  homeState,
  router: routerReducer
});

export default rootReducer;
