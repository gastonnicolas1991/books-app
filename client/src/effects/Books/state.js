import { BOOKS_STATE } from './constants';

const state = {
  [BOOKS_STATE]: {
    error: null,
    isFetching: true,
    books: null,
  },
};

export default state;
