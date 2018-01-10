import { combineReducers } from 'redux';
import homeState from './homeReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  homeState,
  routing: routerReducer
});

export default rootReducer;
