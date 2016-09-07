import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import todos from './todos';
import * as posts from './posts';

export default combineReducers({
  todos,
  posts,
  routing: routerReducer
});
