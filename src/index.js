import React from 'react';
import ReactDOM from 'react-dom';
import Products from './pages/products';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Products />, document.getElementById('root'));
registerServiceWorker();
