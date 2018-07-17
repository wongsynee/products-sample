import React, { Component } from 'react';
import styled from 'styled-components';
import data from '../../data/products.json';

const ProductGallery = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const ProductItem = styled.div`
    width: 100%;
    text-align: center;
    padding: 0 30px;
    box-sizing: border-box;

    @media (min-width: 768px) {
        width: 50%;
    }

    @media (min-width: 992px) {
        width: 33.333%;
    }

    @media (min-width: 1200px) {
        width: 25%;
    }
`;

const ProductLabels = styled.div`
    position: absolute;
`;

const ProductLabel = styled.span`
    background-color: #009900;
    color: #ffffff;
    font-size: 16px;
    padding: 20px 35px;
    display: inline-block;
`;

const ProductLabelSale = ProductLabel.extend`
    background-color: #cc3333;
`;

const ProductContent = styled.div`
    text-align: left;
    padding: 90px 0;
`;

const ProductHeading = styled.span`
    font-size: 19px;
    font-weight: 700;
    display: inline-block;
    width: 60%;
`;

const ProductPrice = ProductHeading.extend`
    font-size: 30px;
    text-align: right;
    width: 40%;
`;

class Gallery extends Component {
	// Function for rendering products in the gallery.
	renderProduct() {
		const productItems = data.map((product) => {
			// Render specific products if `product.size` array contains the same value as props.
			// Render all products if props is equals to `All`.
			if ((product.size.includes(this.props.filterBy)) || (this.props.filterBy === 'All')) {
				return (
					<ProductItem key={ product.index.toString() }>
						<img
							src={ process.env.PUBLIC_URL + '/images/' + product.productImage }
							alt={ product.productName + ' image'}
						/>
						<ProductLabels>
							{ (product.isExclusive === true) ? <ProductLabel>Exclusive</ProductLabel> : '' }
							{ (product.isSale === true) ? <ProductLabelSale>Sale</ProductLabelSale> : '' }
						</ProductLabels>
						<ProductContent>
							<ProductHeading>{ product.productName }</ProductHeading>
							<ProductPrice>{ product.price }</ProductPrice>
						</ProductContent>
					</ProductItem>
				);
			} else {
				return null;
			}
		});

		return (
			<ProductGallery>
				{ productItems }
			</ProductGallery>
		);
	}

	render() {
		return (
			<div>
				{ this.renderProduct() }
			</div>
		);
	}
}

export default Gallery;
