import * as ActionTypes from '../../constants/PostActionTypes';
import * as visibilityFilters from '../../constants/PostVisibilityFilters';

const initialState = visibilityFilters.SHOW_ALL;

const actionsMap = {
  [ActionTypes.SET_VISIBILITY_FILTER](state, action) {
    return (action.data || state);
  }
};

export default function postsVisibility(state = initialState, action) {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
}
