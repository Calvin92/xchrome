import React from 'react';
import style from './style';
import Logo from '../../logo';

import { 
	List, ListItem, 
	ListSubHeader, ListDivider, 
	ListCheckbox } from 'react-toolbox/list';

class ReadingApp extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<article className={style.wrapper}>
				<header>
					<Logo fillColor="#333333" className={style['custom-logo']} />
				</header>
				<section className={style['main-container']}>
					<div className={style['left-pannel']}>
						<List selectable ripple>
					    <ListSubHeader caption='Explore characters' />
					    <ListItem
					      avatar='https://dl.dropboxusercontent.com/u/2247264/assets/m.jpg'
					      caption='Dr. Manhattan'
					      legend="Jonathan 'Jon' Osterman"
					      rightIcon='star'
					    />
					    <ListItem
					      avatar='https://dl.dropboxusercontent.com/u/2247264/assets/o.jpg'
					      caption='Ozymandias'
					      legend='Adrian Veidt'
					      rightIcon='star'
					    />
					    <ListItem
					      avatar='https://dl.dropboxusercontent.com/u/2247264/assets/r.jpg'
					      caption='Rorschach'
					      legend='Walter Joseph Kovacs'
					      rightIcon='star'
					    />
					  </List>
				  </div>

				 	<div className={style['middle-pannel']}>
						<List selectable ripple>
					    <ListItem
					      avatar='https://dl.dropboxusercontent.com/u/2247264/assets/m.jpg'
					      caption='Dr. Manhattan'
					      legend="Jonathan 'Jon' Osterman"
					      rightIcon='star'
					    />
					    <ListItem
					      avatar='https://dl.dropboxusercontent.com/u/2247264/assets/o.jpg'
					      caption='Ozymandias'
					      legend='Adrian Veidt'
					      rightIcon='star'
					    />
					    <ListItem
					      avatar='https://dl.dropboxusercontent.com/u/2247264/assets/r.jpg'
					      caption='Rorschach'
					      legend='Walter Joseph Kovacs'
					      rightIcon='star'
					    />
					    <ListItem
					      avatar='https://dl.dropboxusercontent.com/u/2247264/assets/m.jpg'
					      caption='Dr. Manhattan'
					      legend="Jonathan 'Jon' Osterman"
					      rightIcon='star'
					    />
					    <ListItem
					      avatar='https://dl.dropboxusercontent.com/u/2247264/assets/o.jpg'
					      caption='Ozymandias'
					      legend='Adrian Veidt'
					      rightIcon='star'
					    />
					    <ListItem
					      avatar='https://dl.dropboxusercontent.com/u/2247264/assets/r.jpg'
					      caption='Rorschach'
					      legend='Walter Joseph Kovacs'
					      rightIcon='star'
					    />
					    <ListItem
					      avatar='https://dl.dropboxusercontent.com/u/2247264/assets/m.jpg'
					      caption='Dr. Manhattan'
					      legend="Jonathan 'Jon' Osterman"
					      rightIcon='star'
					    />
					    <ListItem
					      avatar='https://dl.dropboxusercontent.com/u/2247264/assets/o.jpg'
					      caption='Ozymandias'
					      legend='Adrian Veidt'
					      rightIcon='star'
					    />
					    <ListItem
					      avatar='https://dl.dropboxusercontent.com/u/2247264/assets/r.jpg'
					      caption='Rorschach'
					      legend='Walter Joseph Kovacs'
					      rightIcon='star'
					    />
					    <ListItem
					      avatar='https://dl.dropboxusercontent.com/u/2247264/assets/m.jpg'
					      caption='Dr. Manhattan'
					      legend="Jonathan 'Jon' Osterman"
					      rightIcon='star'
					    />
					    <ListItem
					      avatar='https://dl.dropboxusercontent.com/u/2247264/assets/o.jpg'
					      caption='Ozymandias'
					      legend='Adrian Veidt'
					      rightIcon='star'
					    />
					    <ListItem
					      avatar='https://dl.dropboxusercontent.com/u/2247264/assets/r.jpg'
					      caption='Rorschach'
					      legend='Walter Joseph Kovacs'
					      rightIcon='star'
					    />
					    <ListItem
					      avatar='https://dl.dropboxusercontent.com/u/2247264/assets/m.jpg'
					      caption='Dr. Manhattan'
					      legend="Jonathan 'Jon' Osterman"
					      rightIcon='star'
					    />
					    <ListItem
					      avatar='https://dl.dropboxusercontent.com/u/2247264/assets/o.jpg'
					      caption='Ozymandias'
					      legend='Adrian Veidt'
					      rightIcon='star'
					    />
					    <ListItem
					      avatar='https://dl.dropboxusercontent.com/u/2247264/assets/r.jpg'
					      caption='Rorschach'
					      legend='Walter Joseph Kovacs'
					      rightIcon='star'
					    />
					  </List>
				 	</div>

				 	<div className={style['right-pannel']}>

				 	</div>
			  </section>
			</article>
		);
	}

}

export default ReadingApp;