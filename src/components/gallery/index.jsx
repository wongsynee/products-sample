import React, { Component } from 'react';
import styled from 'styled-components';
import Product from '../product'

const GalleryStyled = styled.div`
    padding: 30px;
`;

class Gallery extends Component {
    render() {
        return (
            <GalleryStyled>
                <Product />
            </GalleryStyled>
        );
    }
}

export default Gallery;
