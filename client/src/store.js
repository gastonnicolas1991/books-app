/* eslint-disable import/no-extraneous-dependencies */

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import createRootReducer from './rootReducer';
import rootSaga from './rootSagas';

function composeStore() {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    createRootReducer(),
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
}

export default composeStore;
