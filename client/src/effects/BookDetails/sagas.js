import { call, put } from 'redux-saga/effects';
import { fetchBookDetailFailureAction, fetchBookDetailSuccessAction } from './actions';
import { getBookDetailRequest } from './requests';

export function* getBookDetailSaga(action) {
  try {
    const response = yield call(getBookDetailRequest, action.payload);

    if (response.status >= 400) {
      yield put(fetchBookDetailFailureAction({ error: response.data }));
    }

    yield put(fetchBookDetailSuccessAction({ book: response.data }));
  } catch (error) {
    yield put(fetchBookDetailFailureAction({ error: error.message }));
  }
}
