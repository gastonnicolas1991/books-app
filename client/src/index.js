import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import '@babel/polyfill';
import '../styles/global.css';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import BookList from './pages/bookList';
import BookDetail from './pages/bookDetail';
import composeStore from './store';

ReactDOM.render(
  <Provider store={composeStore()}>
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Navigate to="books" />} />
        <Route path="books" element={<BookList />} />
        <Route path="books/:id" element={<BookDetail />} />
        <Route path="new" element={<div>new</div>} />
        <Route path="*" element={<div>404 not found</div>} />
      </Routes>
    </BrowserRouter>
  </Provider>,

  document.getElementById('app')
);
