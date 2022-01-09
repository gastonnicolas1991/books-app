import { all, takeEvery } from 'redux-saga/effects';

import { getAllCharactersSaga } from './effects/Characters/sagas';
import { CHARACTER_LIST_REQUEST } from './effects/Characters/constants';

export default function* rootSaga() {
  yield all([takeEvery(CHARACTER_LIST_REQUEST, getAllCharactersSaga)]);
}
