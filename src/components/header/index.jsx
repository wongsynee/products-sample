import React, { Component } from 'react';
import styled from 'styled-components';
import data from '../../data/products.json';

const HeaderStyled = styled.header`
    background-color: #def1f4;
    color: #333333;
    padding: 10px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled.h1`
    font-size: 36px;
    margin: 0;
`;

class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			optionValue: ''
		};

		this.toggleSelect = this.toggleSelect.bind(this);
	}

	// Function for rendering the filter.
	renderFilter() {
		let consolidatedSizesArray = [];

		data.map((product) => {
			product.size.map((size) => {
				if (!consolidatedSizesArray.includes(size)) {
					consolidatedSizesArray.push(size);
				}
				return null;
			});
			return null;
		});

		const filterItems = consolidatedSizesArray.map((size, index) => {
			return (
				<option key={ index } value={ size }>{ size }</option>
			);
		});

		return (
			<select onChange={ this.toggleSelect } value={ this.state.optionValue }>
				<option value="All">Filter by size</option>
				{ filterItems }
			</select>
		);
	}

	// Function for toggling between options under the select element. Sets a new state for `optionValue`.
	toggleSelect(event) {
		event.preventDefault();
		this.props.updateFilter(event.target.value);
		this.setState({
			optionValue: event.target.value
		});
	}

	render() {
		return (
			<HeaderStyled>
				<Title>Women’s tops</Title>
				{ this.renderFilter() }
			</HeaderStyled>
		);
	}
}

export default Header;
