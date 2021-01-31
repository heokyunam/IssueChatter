import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './stores';
import logger from 'redux-logger'
import './fonts/fonts.css';

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App/>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);