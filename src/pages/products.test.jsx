import React from 'react';
import ReactDOM from 'react-dom';
import Products from './products';

it('renders without crashing', () => { // eslint-disable-line no-undef
	const div = document.createElement('div');
	ReactDOM.render(<Products />, div);
	ReactDOM.unmountComponentAtNode(div);
});
