import React from 'react';
import FavMainPokes from '../components/FavMainPokes';
import Header from '../components/Header';

export default class Favoritos extends React.Component {
	render() {
		return (
			<section className="section-favorite">
				<Header />
				<FavMainPokes />
			</section>
		);
	}
}
