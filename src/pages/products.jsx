import React, { Component } from 'react';
import Header from '../components/header';
import Gallery from '../components/gallery';
import '../theme/global-style';

class Products extends Component {
	constructor(props) {
		super(props);

		this.state = {
			filterBy: 'All'
		};

		this.updateFilter = this.updateFilter.bind(this);
	}

	// Function for setting a new state for `filterBy` with the value being passed in.
	updateFilter(value) {
		this.setState({
			filterBy: value
		});
	}

	render() {
		return (
			<section>
				<Header updateFilter={this.updateFilter} />
				<Gallery filterBy={this.state.filterBy}/>
			</section>
		);
	}
}

export default Products;
