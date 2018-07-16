import React, { Component } from 'react';
import styled from 'styled-components';
import data from '../../data/products.json'

const ProductStyled = styled.div`

`;

class Product extends Component {
    constructor(props) {
		super(props);
    }

    renderProduct() {
        console.log('hello');
        const productItems = data.map((product) => {
            console.log('product', product);
        });
    }

    render() {
        return (
            <ProductStyled>
                <ul>{this.renderProduct()}</ul>
            </ProductStyled>
        );
    }
}

export default Product;
