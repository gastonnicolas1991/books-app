import { BOOK_DETAIL_STATE } from './constants';

export const getBookDetail = state => state[BOOK_DETAIL_STATE]?.book;
