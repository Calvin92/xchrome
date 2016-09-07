import { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect, Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import * as PostsActions from '../actions/posts';
import appRoutes from './routes';


@connect(
  state => ({
    state
  }),
  dispatch => ({
    actions: bindActionCreators(PostsActions, dispatch)
  })
)
export default class App extends Component {

  static propTypes = {
    store: PropTypes.object.isRequired,
    state: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  };

  render() {
    const { state, actions, store } = this.props;
    const history = syncHistoryWithStore(browserHistory, store);

    return (
      <Provider store={store}>
        <Router
          history={history}
          onUpdate={() => window.scrollTo(0, 0)}
        >
          {appRoutes}
        </Router>
      </Provider>
    );
  }
}

