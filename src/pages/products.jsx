import React, { Component } from 'react';
import Header from '../components/header';
import Gallery from '../components/gallery';
import '../theme/global-style';

class Products extends Component {
    render() {
        return (
            <section>
                <Header />
                <Gallery />
            </section>
        );
    }
}

export default Products;
