import { BOOK_LIST_REQUEST, BOOK_LIST_SUCCESS, BOOK_LIST_FAILURE } from './constants';

export const fetchBooksRequestAction = payload => ({
  type: BOOK_LIST_REQUEST,
  payload,
});

export const fetchBooksSuccessAction = payload => ({
  type: BOOK_LIST_SUCCESS,
  payload,
});

export const fetchBooksFailureAction = payload => ({
  type: BOOK_LIST_FAILURE,
  payload,
});
