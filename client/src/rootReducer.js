import { combineReducers } from 'redux';

import books from './effects/Books/reducer';
import book from './effects/BookDetails/reducer';

const createRootReducer = () =>
  combineReducers({
    books,
    book,
  });

export default createRootReducer;
