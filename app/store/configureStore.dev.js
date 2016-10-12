import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';
import storage from '../utils/storage';

const logger = createLogger();

const enhancer = compose(
  applyMiddleware(thunk, logger),
  storage(),
  window.devToolsExtension ? window.devToolsExtension() : nope => nope
);

export default function (initialState) {
  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
