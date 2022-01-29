import { all, takeEvery } from 'redux-saga/effects';

import { getAllBooksSaga } from './effects/Books/sagas';
import { BOOK_LIST_REQUEST } from './effects/Books/constants';

import { getBookDetailSaga } from './effects/BookDetails/sagas';
import { BOOK_DETAIL_REQUEST } from './effects/BookDetails/constants';

export default function* rootSaga() {
  yield all([takeEvery(BOOK_LIST_REQUEST, getAllBooksSaga)]);
  yield all([takeEvery(BOOK_DETAIL_REQUEST, getBookDetailSaga)]);
}
