import { combineReducers } from 'redux';
import aotuFeeds from './aotuFeeds.js';
import customFeeds from './customFeeds.js';

const feeds = combineReducers({
	aotuFeeds,
	customFeeds
});

export default feeds;