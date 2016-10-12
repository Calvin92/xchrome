import React from 'react';
import { connect } from 'react-redux';

import style from './style';
import Logo from '../../logo';
import { 
	List, ListItem, 
	ListSubHeader, ListDivider, 
	ListCheckbox } from 'react-toolbox/list';

/* 登录后的首页 */
class ReadingApp extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			ifrmaeSrc: '',
			activeTabIndexForFeeds: 0
		}
	}

	changeIframeUrl() {
		this.setState({ifrmaeSrc: 'https://www.baidu.com'});
	}

	setActiveTabForFeeds(index) {
		this.setState({activeTabIndexForFeeds: index});
	}

	componentDidMount() {
		// console.log(this.props.feeds);
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
		return (
			<article className={style.wrapper}>
				<header>
					<Logo fillColor="#333333" className={style['custom-logo']} />
				</header>
				<section className={style['main-container']}>
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

				 	<div className={style['middle-pannel']}>
						<List selectable ripple>
					    <ListItem
					      avatar='https://dl.dropboxusercontent.com/u/2247264/assets/m.jpg'
					      caption='Dr. Manhattan'
					      legend="Jonathan 'Jon' Osterman"
					      onClick={::this.changeIframeUrl}
					    />
					    <ListItem
					      avatar='https://dl.dropboxusercontent.com/u/2247264/assets/o.jpg'
					      caption='Ozymandias'
					      legend='Adrian Veidt'
					    />
					    <ListItem
					      avatar='https://dl.dropboxusercontent.com/u/2247264/assets/r.jpg'
					      caption='Rorschach'
					      legend='Walter Joseph Kovacs'
					    />
					    <ListItem
					      avatar='https://dl.dropboxusercontent.com/u/2247264/assets/m.jpg'
					      caption='Dr. Manhattan'
					      legend="Jonathan 'Jon' Osterman"
					    />
					    <ListItem
					      avatar='https://dl.dropboxusercontent.com/u/2247264/assets/o.jpg'
					      caption='Ozymandias'
					      legend='Adrian Veidt'
					    />
					    <ListItem
					      avatar='https://dl.dropboxusercontent.com/u/2247264/assets/r.jpg'
					      caption='Rorschach'
					      legend='Walter Joseph Kovacs'
					    />
					    <ListItem
					      avatar='https://dl.dropboxusercontent.com/u/2247264/assets/m.jpg'
					      caption='Dr. Manhattan'
					      legend="Jonathan 'Jon' Osterman"
					    />
					    <ListItem
					      avatar='https://dl.dropboxusercontent.com/u/2247264/assets/o.jpg'
					      caption='Ozymandias'
					      legend='Adrian Veidt'
					    />
					    <ListItem
					      avatar='https://dl.dropboxusercontent.com/u/2247264/assets/r.jpg'
					      caption='Rorschach'
					      legend='Walter Joseph Kovacs'
					    />
					    <ListItem
					      avatar='https://dl.dropboxusercontent.com/u/2247264/assets/m.jpg'
					      caption='Dr. Manhattan'
					      legend="Jonathan 'Jon' Osterman"
					    />
					    <ListItem
					      avatar='https://dl.dropboxusercontent.com/u/2247264/assets/o.jpg'
					      caption='Ozymandias'
					      legend='Adrian Veidt'
					    />
					    <ListItem
					      avatar='https://dl.dropboxusercontent.com/u/2247264/assets/r.jpg'
					      caption='Rorschach'
					      legend='Walter Joseph Kovacs'
					    />
					    <ListItem
					      avatar='https://dl.dropboxusercontent.com/u/2247264/assets/m.jpg'
					      caption='Dr. Manhattan'
					      legend="Jonathan 'Jon' Osterman"
					    />
					    <ListItem
					      avatar='https://dl.dropboxusercontent.com/u/2247264/assets/o.jpg'
					      caption='Ozymandias'
					      legend='Adrian Veidt'
					    />
					    <ListItem
					      avatar='https://dl.dropboxusercontent.com/u/2247264/assets/r.jpg'
					      caption='Rorschach'
					      legend='Walter Joseph Kovacs'
					    />
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