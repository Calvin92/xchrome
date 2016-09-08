import React from 'react';
import { Link } from 'react-router';

const Navigation = (props) => {
  return (
    <nav className={props.className}>
      <ul>
        <li><Link activeClassName={props.activeClassName} to='/posts'>Posts</Link></li>
        <li><a href='//github.com/o2team/app' target='_blank'>Github</a></li>
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  activeClassName: React.PropTypes.string,
  className: React.PropTypes.string
};


Navigation.defaultProps = {
  activeClassName: '',
  className: ''
};

export default Navigation;
