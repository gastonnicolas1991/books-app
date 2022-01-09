import { call, put } from 'redux-saga/effects';
import { fetchCharactersFailureAction, fetchCharactersSuccessAction } from './actions';
import { getAllCharactersRequest } from './requests';

export function* getAllCharactersSaga(action) {
  try {
    const response = yield call(getAllCharactersRequest, action.payload);

    if (response.status >= 400) {
      yield put(fetchCharactersFailureAction({ error: response.data }));
    }

    yield put(fetchCharactersSuccessAction({ characters: response.data }));
  } catch (error) {
    yield put(fetchCharactersFailureAction({ error: error.message }));
  }
}
