import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import style from './style';
import Logo from '../../logo';
import FeedsListApp from '../fragments/feeds-list';
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
		// const url = 'http://www.ruanjiawei.com/atom.xml';
		// spider.fetchRss(url).then(function(data) {console.log(data)});
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
					<FeedsListApp addIcon={true} />
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