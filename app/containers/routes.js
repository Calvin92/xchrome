import React from 'react';
import {
  Route,
  IndexRoute,
} from 'react-router';

require('../components/fonts');

import Home from '../components/layout/home';
import Posts from '../components/layout/posts';


/**
 * Routes: https://github.com/reactjs/react-router/blob/master/docs/API.md#route
 *
 * Routes are used to declare your view hierarchy.
 *
 * Say you go to http://material-ui.com/#/components/paper
 * The react router will search for a route named 'paper' and will recursively render its
 * handler and its parent handler like so: Paper > Components > Master
 */
const AppRoutes = (
  <Route path="/" component={Home}>
    <IndexRoute component={Home} />
    <Route path="/posts" component={Posts} />
  </Route>
);

export default AppRoutes;
