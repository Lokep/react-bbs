import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux'
import './App.css'
import Router from './router'
import axios from 'axios'

const baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:8888' : 'http://121.196.17.194:8888'
React.$axios = axios
React.baseURL = baseURL
React.$axios.defaults.baseURL = baseURL
console.log(process.env)
console.log(process.env.NODE_ENV)
ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,  
  document.getElementById('root')
);

