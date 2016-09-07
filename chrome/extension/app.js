import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from '../../app/containers/App';

// Helpers for debugging
window.React = React;
window.Perf = require('react-addons-perf');

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

chrome.storage.local.get('state', obj => {
  console.log('obj', obj);
  const { state } = obj;
  const initialState = JSON.parse(state || '{}');
  const createStore = require('../../app/store/configureStore');
  ReactDOM.render(
    <App store={createStore(initialState)} />,
    document.querySelector('#root')
  );
});
