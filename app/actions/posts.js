/**
 * http://redux.js.org/docs/basics/Actions.html
 */
import * as types from '../constants/PostActionTypes';

export function filterPost(text) {
  return { type: types.FILTER_POST, data: text };
}

export function filterPostByCate(cid) {
  return { type: types.FILTER_POST_BY_CATE, data: cid };
}

export function markAsReaded(id) {
  return { type: types.READ_POST, data: id };
}

export function markAllAsReaded() {
  return { type: types.READ_ALL };
}
