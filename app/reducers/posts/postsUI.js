import { Map, List } from 'immutable';
import * as ActionTypes from '../../constants/PostActionTypes';
import * as channels from '../../constants/PostChannels';

const initialState = Map({
  channel: channels.UI,
  posts: List([]),
  postsReaded: List([]),
  postsFresh: List([]),
  postsSearched: List([])
});

const actionsMap = {
  [ActionTypes.FILTER_POST](state, action) {
    const items = state.get('posts');
    return state.set('postsSearched', items.takeWhile(v => v.title.indexOf(action.data) > 0 || v.excerpt.indexOf(action.data) > 0));
  },
  [ActionTypes.READ_POST](state, action) {
    const items = state.get('posts');
    let item0 = null;
    return state.set('posts', items.map(item => {
      if (item.objectId === action.data) {
        item.isReaded = true;
        item0 = item;
      }
      return item;
    }))
    .update('postsReaded', v => v.push(item0))
    .update('postsFresh', v => v.takeWhile(v1 => v1.objectId !== item0.objectId));
  },
  [ActionTypes.READ_ALL](state/*, action*/) {
    const items = state.get('posts').map(v => {
      v.isReaded = true;
      return v;
    });
    return state
    .update('posts', items)
    .update('postsReaded', items)
    .update('postsFresh', List([]));
  }
};

export default function postsUI(state = initialState, action) {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
}
