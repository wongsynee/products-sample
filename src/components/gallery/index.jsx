import React, { Component } from 'react';
import styled from 'styled-components';
import data from '../../data/products.json'

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
`;

const ProductLabelWrapper = styled.div`
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
    renderProduct() {
        const productItems = data.map((product) => {
            return (
                <ProductItem key={ product.index.toString() }>
                    <img 
                        src={ process.env.PUBLIC_URL + '/images/' + product.productImage }
                        alt={ product.productName + ' image'}
                    />
                    <ProductLabelWrapper>
                        { (product.isExclusive === true) ? <ProductLabel>Exclusive</ProductLabel> : '' }
                        { (product.isSale === true) ? <ProductLabelSale>Sale</ProductLabelSale> : '' }
                    </ProductLabelWrapper>
                    <ProductContent>
                        <ProductHeading>{ product.productName }</ProductHeading>
                        <ProductPrice>{ product.price }</ProductPrice>
                    </ProductContent>
                </ProductItem>
            );
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
