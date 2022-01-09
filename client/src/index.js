import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import '@babel/polyfill';
import '../styles/global.css';
import Characters from './pages/characters';
import composeStore from './store';

ReactDOM.render(
  <Provider store={composeStore()}>
    <Characters />
  </Provider>,
  document.getElementById('app')
);
