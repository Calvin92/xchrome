import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import style from './style';
import Logo from '../../logo';
import { List, ListItem, ListSubHeader } from 'react-toolbox/list';

/* 登录后的首页 */
class ReadingApp extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			ifrmaeSrc: '',
			activeTabIndexForFeeds: 0,
			articlesList: [],
			showAddIconForAotuFeeds: false,
			showAddIconForCustomFeeds: false
		}
	}

	componentDidMount() {
		this.setState({articlesList: this.props.feeds.aotuFeeds[0].articles});
	}

	changeIframeUrl() {
		this.setState({ifrmaeSrc: 'https://www.baidu.com'});
	}

	setActiveTabForFeeds(index) {
		const { aotuFeeds, customFeeds} = this.props.feeds;
		this.setState({
			activeTabIndexForFeeds: index, 
			articlesList: index >= aotuFeeds.length ? 
											customFeeds[index - aotuFeeds.length].articles 
											: aotuFeeds[index].articles
		});
	}

	handleMouseOver(type) {
		if (type == 'auto') {
			this.setState({showAddIconForAotuFeeds: true})
		} else {
			this.setState({showAddIconForCustomFeeds: true});
		}
	}

	handleMouseOut(type) {
		if (type == 'auto') {
			this.setState({showAddIconForAotuFeeds: false})
		} else {
			this.setState({showAddIconForCustomFeeds: false});
		}
	}

	render() {
		const { aotuFeeds, customFeeds } = this.props.feeds;
		const aotuFeedsList = this.props.feeds.aotuFeeds.map( (item, index) => 
			<ListItem 
				itemContent={item.name} 
				key={index} 
				onClick={this.setActiveTabForFeeds.bind(this, index)}
				className={this.state.activeTabIndexForFeeds == index ? style['active-feeds-item'] : ''}
				avatar='https://dl.dropboxusercontent.com/u/2247264/assets/m.jpg' /> 
		);
		const customFeedsList = this.props.feeds.customFeeds.map( (item, index) => 
			<ListItem 
				itemContent={item.name}
				key={index}
				onClick={this.setActiveTabForFeeds.bind(this, index + customFeeds.length)}
				className={this.state.activeTabIndexForFeeds == (index + customFeeds.length) ? style['active-feeds-item'] : ''}
				avatar='https://dl.dropboxusercontent.com/u/2247264/assets/m.jpg' />
		);
		const articlesList = this.state.articlesList.map( (item, index) =>
			<ListItem 
				caption={item.caption}
				key={index}
				legend={item.legend} />
		);
		return (
			<article className={style.wrapper}>
				<header>
					<Logo fillColor="#333333" className={style['custom-logo']} />
				</header>
				<section className={style['main-container']}>
					<div className={style['left-pannel']}>
						<List selectable ripple>
							<Link to='/add-feeds'>
								<span className={style['feeds-list-add']}>+</span>
							</Link>
					    <ListSubHeader caption='Explore characters' />
					    {aotuFeedsList}
					  </List>

					  <List selectable ripple>
					  	<span className={style['feeds-list-add']}>+</span>
					    <ListSubHeader caption='custom feeds' />
					    {customFeedsList}
					  </List>
				  </div>

				 	<div className={style['middle-pannel']}>
						<List selectable ripple>
					    {articlesList}
					  </List>
				 	</div>

				 	<div className={style['right-pannel']}>
						<iframe style={{display: !!this.state.ifrmaeSrc ? 'block' : 'none' }} src={this.state.ifrmaeSrc}>
							
						</iframe>
				 	</div>
			  </section>
			</article>
		);
	}

}

export default connect(
	state => ({
		feeds: state.feeds
	})
)(ReadingApp);