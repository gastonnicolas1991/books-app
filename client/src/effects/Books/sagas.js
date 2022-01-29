import { call, put } from 'redux-saga/effects';
import { fetchBooksFailureAction, fetchBooksSuccessAction } from './actions';
import { getAllBooksRequest } from './requests';

export function* getAllBooksSaga(action) {
  try {
    const response = yield call(getAllBooksRequest, action.payload);

    if (response.status >= 400) {
      yield put(fetchBooksFailureAction({ error: response.data }));
    }

    yield put(fetchBooksSuccessAction({ books: response.data }));
  } catch (error) {
    yield put(fetchBooksFailureAction({ error: error.message }));
  }
}
