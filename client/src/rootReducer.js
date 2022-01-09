import { combineReducers } from 'redux';

import characters from './effects/Characters/reducer';

const createRootReducer = () =>
  combineReducers({
    characters,
  });

export default createRootReducer;
