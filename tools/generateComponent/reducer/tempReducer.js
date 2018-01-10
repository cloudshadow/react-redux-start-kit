/* eslint-disable */
import {
  TEMP
} from '../actions/templateActions';
// import objectAssign from 'object-assign';

const initialState = {
  temp: null,
  error: null,
  token: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TEMP:
      return {
        ...state,
        temp: action.temp,
        error: null,
        token: action.token
      };
    default:
      return state;
  }
};