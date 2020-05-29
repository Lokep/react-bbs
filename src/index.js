import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux'
import './App.css'
import Router from './router'

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,  
  document.getElementById('root')
);

