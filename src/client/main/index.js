import React from 'react';
import { render } from 'react-dom';
import App from './components';

import { Provider } from 'react-redux';

//render(<App/>,    document.querySelector('#react-root'));

import store from './components/store/store';
render(<Provider store={store}>
        <App/></Provider>,
    document.querySelector('#react-root'));