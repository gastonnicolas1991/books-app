import { BOOKS_STATE } from './constants';

export const getAllBooks = state => state[BOOKS_STATE]?.books;
