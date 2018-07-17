import React, { Component } from 'react';
import styled from 'styled-components';

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
                <select onChange={this.toggleSelect} value={this.state.optionValue}>
                    <option value="All">Filter by size</option>
                    <option value="XS">Extra-small</option>
                    <option value="S">Small</option>
                    <option value="M">Medium</option>
                    <option value="L">Large</option>
                    <option value="XL">Extra-large</option>
                </select>
            </HeaderStyled>
        );
    }
}

export default Header;
