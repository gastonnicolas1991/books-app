import { BOOK_DETAIL_REQUEST, BOOK_DETAIL_SUCCESS, BOOK_DETAIL_FAILURE } from './constants';

export const fetchBookDetailRequestAction = payload => ({
  type: BOOK_DETAIL_REQUEST,
  payload,
});

export const fetchBookDetailSuccessAction = payload => ({
  type: BOOK_DETAIL_SUCCESS,
  payload,
});

export const fetchBookDetailFailureAction = payload => ({
  type: BOOK_DETAIL_FAILURE,
  payload,
});
