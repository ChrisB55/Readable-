import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
ReactDOM.render(
    <Provider store={createStore(reducers)}> 
    <BrowserRouter><App /></BrowserRouter> 
  </Provider> ,
    document.getElementById('root')
);
registerServiceWorker();
