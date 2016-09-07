import React from 'react';
import {
  Route,
  Redirect,
  IndexRoute,
} from 'react-router';

// Here we define all our material-ui ReactComponents.
import Master from '../components/Master';
import Home from '../components/pages/Home';

import Community from '../components/pages/discover/Community';
import About from '../components/pages/discover/About';


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
  <Route path="/" component={Master}>
    <IndexRoute component={Home} />
    <Route path="home" component={Home} />
    <Redirect from="discover" to="/discover/community" />
    <Route path="discover">
      <Route path="community" component={Community} />
      <Route path="about" component={About} />
    </Route>
  </Route>
);

export default AppRoutes;