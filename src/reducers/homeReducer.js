import {
  GET_HOME_TITLE
} from '../actions/homeActions';
// import objectAssign from 'object-assign';

const initialState = {
  title: null,
  error: null,
  token: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_HOME_TITLE:
      return {
        ...state,
        title: action.title
      };
    default:
      return state;
  }
};