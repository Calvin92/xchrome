import React from 'react';
import { connect } from 'react-redux';

import style from './style.scss';

import { List, ListSubHeader, ListItem } from 'react-toolbox/list';

class FeedsListApp extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		const { aotuFeeds, customFeeds } = this.props.feeds;
		const aotuFeedsList = this.props.feeds.aotuFeeds.map( (item, index) => 
			<ListItem 
				itemContent={item.name} 
				key={index} 
				avatar='https://dl.dropboxusercontent.com/u/2247264/assets/m.jpg' /> 
		);
		const customFeedsList = this.props.feeds.customFeeds.map( (item, index) => 
			<ListItem 
				itemContent={item.name}
				key={index}
				avatar='https://dl.dropboxusercontent.com/u/2247264/assets/m.jpg' />
		);
		return (
			<div className={style['left-pannel']}>
				<List selectable ripple>
			    <ListSubHeader caption='Explore characters' />
			    {aotuFeedsList}
			  </List>

			  <List selectable ripple>
			    <ListSubHeader caption='custom feeds' />
			    {customFeedsList}
			  </List>
		  </div>
		)
	}

}

export default connect(
		state => ({
			feeds: state.feeds
		})
	)(FeedsListApp);
