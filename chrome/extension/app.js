import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
//use hashHistory instead of browserHistory
//http://stackoverflow.com/questions/34079549/react-router-and-cordova-not-working
//https://github.com/reactjs/react-router/issues/2161
import { hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import App from '../../app/containers/App';

const createStore = require('../../app/store/configureStore');

// Helpers for debugging
window.React = React;
window.Perf = require('react-addons-perf');

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

chrome.storage.local.get('state', obj => {
  const { state } = obj;
  const initialState = JSON.parse(state || '{}');
  const store = createStore(initialState);
  const history = syncHistoryWithStore(hashHistory, store);

  ReactDOM.render(
    <App store={store} history={history} />,
    document.querySelector('#root')
  );
});

