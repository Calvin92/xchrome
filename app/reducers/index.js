import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import todos from './todos';
import feeds from './feeds';

export default combineReducers({
	feeds,
  todos,
  routing: routerReducer
});
