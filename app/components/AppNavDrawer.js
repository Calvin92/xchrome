import React, { Component, PropTypes } from 'react';
import Drawer from 'material-ui/Drawer';
import { List, ListItem, MakeSelectable } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import { spacing, typography, zIndex } from 'material-ui/styles';
import { cyan500 } from 'material-ui/styles/colors';

import * as channels from '../constants/PostChannels';

const SelectableList = MakeSelectable(List);

const styles = {
  logo: {
    cursor: 'pointer',
    fontSize: 24,
    color: typography.textFullWhite,
    lineHeight: `${spacing.desktopKeylineIncrement}px`,
    fontWeight: typography.fontWeightLight,
    backgroundColor: cyan500,
    paddingLeft: spacing.desktopGutter,
    marginBottom: 8,
  },
  channel: {
    paddingLeft: spacing.desktopGutterLess,
    fontSize: 16,
  },
};

class AppNavDrawer extends Component {
  static propTypes = {
    docked: PropTypes.bool.isRequired,
    location: PropTypes.object.isRequired,
    onChangeList: PropTypes.func.isRequired,
    onRequestChangeNavDrawer: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    style: PropTypes.object,
  };

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
    router: PropTypes.object.isRequired,
  };

  state = {
    channels: [],
    channel: channels.ALL
  };

  componentDidMount() {
    const self = this;
    const url = '/data/channels.json';
    const request = new XMLHttpRequest();

    request.onreadystatechange = () => {
      let items = null;
      if (request.readyState === 4 && request.status === 200) {
        items = JSON.parse(request.responseText);
        self.setState({
          channels: items,
          channel: items[0],
        });
      }
    };

    request.open('GET', url, true);
    request.send();
  }

  currentChannel() {
    if (window.location.hostname === 'localhost') return this.state.channel;
    if (window.location.pathname === '/') {
      return this.state.channel;
    }
    return window.location.pathname.replace(/\//g, '');
  }

  handleRequestChangeLink = (event, value) => {
    window.location = value;
  };

  handleTouchTapHeader = () => {
    this.context.router.push('/');
    this.props.onRequestChangeNavDrawer(false);
  };

  render() {
    const {
      location,
      docked,
      onRequestChangeNavDrawer,
      onChangeList,
      open,
      style,
    } = this.props;

    return (
      <Drawer
        style={style}
        docked={docked}
        open={open}
        onRequestChange={onRequestChangeNavDrawer}
        containerStyle={{ zIndex: zIndex.drawer - 100 }}
      >
        <div style={styles.logo} onTouchTap={this.handleTouchTapHeader}>
          AOTULabs
        </div>
        <span style={styles.channel}>Channel: {this.currentChannel()}</span>
        <SelectableList
          value={location.pathname}
          onChange={onChangeList}
        >
          <ListItem
            primaryText="Channels"
            primaryTogglesNestedList={true}
            nestedItems={
              this.state.channels.map((item) => {
                return (
                  React.Children.toArray([
                    <ListItem primaryText="{item.name}" value="/channel/{item.id}" />
                  ])
                )
              })
            }
          />
        </SelectableList>
        <Divider />
        <SelectableList
          value=""
          onChange={this.handleRequestChangeLink}
        >
          <Subheader>Resources</Subheader>
          <ListItem primaryText="GitHub" value="https://github.com/o2team/xchrome" />
          <ListItem primaryText="React" value="http://facebook.github.io/react" />
          <ListItem
            primaryText="Material Design"
            value="https://www.google.com/design/spec/material-design/introduction.html"
          />
        </SelectableList>
      </Drawer>
    );
  }
}

export default AppNavDrawer;
