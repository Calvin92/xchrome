import * as ActionTypes from '../../constants/PostActionTypes';
import * as channels from '../../constants/PostChannels';

const initialState = channels.SHOW_ALL;

const actionsMap = {
  [ActionTypes.FILTER_POST_BY_CHANNEL](state, action) {
    return (action.data || state);
  }
};

export default function postsChannel(state = initialState, action) {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
}
