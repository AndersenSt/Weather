import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';

import reducer from './reducers';
import App from './components/App';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const store = createStoreWithMiddleware(reducer);

ReactDom.render(
    <Provider store={store}>
       <App />
    </Provider>,
document.getElementById('root'));