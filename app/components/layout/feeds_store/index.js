import React from 'react';

import FeedsListApp from '../fragments/feeds-list';
import FeedCard from '../fragments/feed-card';

import style from './style.scss';


class FeedsStoreApp extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<article className={style.wrapper}>
				<header >
					<div className={style['feeds-caption']}>
						我的feeds
					</div>
					<div className={style['feeds-list-nav']}></div>
				</header>
				<section className={style.container}>
					<div className={style['left-pannel']}>
						<FeedsListApp />
					</div>
					<div className={style['main-pannel']}>
						<div className={style['search-bar-container']}>
							<div className={style['input-container']}>
								<input placeholder="请输入一个RSS URL" />
							</div>
						</div>
						<div className={style['featured-feeds-container']}>
							<FeedCard />
							<FeedCard />
							<FeedCard />
							<FeedCard />
							<FeedCard />
							<FeedCard />
							<FeedCard />
							<FeedCard />
							<FeedCard />
							<FeedCard />
							<FeedCard />
							<FeedCard />
							<FeedCard />
							<FeedCard />
							<FeedCard />
							<FeedCard />
							<FeedCard />
							<FeedCard />
						</div>
					</div>
				</section>
			</article>
		)
	}

}


export default FeedsStoreApp;