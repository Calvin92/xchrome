import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import style from './style.scss';

import { List, ListSubHeader, ListItem } from 'react-toolbox/list';

// Pass this React Element to ListItem as itemContent props
const ItemContent = (props) => (<p>{props.name}</p>);

class FeedsListApp extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			iconDirectionForAotu: style.down,
			iconDirectionForRSS: style.down
		}
	}

	handleTrangleIconPosition(type) {
		if (type == 'aotu') {
			if (this.state.iconDirectionForAotu == style.down) {
				this.setState({iconDirectionForAotu: style.left});
			} else {
				this.setState({iconDirectionForAotu: style.down});
			}
		} else {
			if (this.state.iconDirectionForRSS == style.down) {
				this.setState({iconDirectionForRSS: style.left});
			} else {
				this.setState({iconDirectionForRSS: style.down});
			}
		}
	}

	render() {
		const { aotuFeeds, customFeeds } = this.props.feeds;
		const aotuFeedsList = this.props.feeds.aotuFeeds.map( (item, index) => 
			<ListItem 
				itemContent={<ItemContent name={item.name} />} 
				key={index} 
				onClick={this.props.clickAotuFeedsHandler}
				className={this.state.iconDirectionForAotu == style.down ? style['show-list'] : style['hide-list']}
				avatar='https://dl.dropboxusercontent.com/u/2247264/assets/m.jpg' /> 
		);
		const customFeedsList = this.props.feeds.customFeeds.map( (item, index) => 
			<ListItem 
				itemContent={<ItemContent name={item.name} />}
				key={index}
				onClick={this.props.clickRSSFeedsHandler}
				className={this.state.iconDirectionForRSS == style.down ? style['show-list'] : style['hide-list']}
				avatar='https://dl.dropboxusercontent.com/u/2247264/assets/m.jpg' />
		);
		return (
			<div className={style['left-pannel']}>
				<List selectable ripple>
					<Link to='/add-feeds'>
						<span 
							style={{display: this.props.addIcon ? 'block' : 'none'}} 
							className={style['feeds-list-add']}>+</span>
					</Link>
					<span 
						className={`${style['triangle-icon']} ${this.state.iconDirectionForAotu}`}
						onClick={this.handleTrangleIconPosition.bind(this, 'aotu')}></span>
			    <ListSubHeader caption='Aotu Feeds' />
			    {aotuFeedsList}
			  </List>

			  <List selectable ripple>
			  	<Link to='/add-feeds'>
						<span 
							style={{display: this.props.addIcon ? 'block' : 'none'}} 
							className={style['feeds-list-add']}>+</span>
					</Link>
			  	<span 
						className={`${style['triangle-icon']} ${this.state.iconDirectionForRSS}`}
						onClick={this.handleTrangleIconPosition.bind(this, 'RSS')}></span>
			    <ListSubHeader caption='RSS Feeds' />
			    {customFeedsList}
			  </List>
		  </div>
		)
	}

}

FeedsListApp.propTypes = {
	clickAotuFeedsHandler: React.PropTypes.func,
	clickRSSFeedsHandler: React.PropTypes.func,
	addIcon: React.PropTypes.bool
};

FeedsListApp.defaultProps = {
	clickRSSFeedsHandler: function() {},
	clickAotuFeedsHandler: function() {},
	addIcon: false
}

export default connect(
		state => ({
			feeds: state.feeds
		})
	)(FeedsListApp);
