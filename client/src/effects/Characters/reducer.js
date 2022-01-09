import {
  CHARACTER_LIST_REQUEST,
  CHARACTER_LIST_SUCCESS,
  CHARACTER_LIST_FAILURE,
  CHARACTERS_STATE,
} from './constants';
import stateBase from './state';

const initialState = stateBase[CHARACTERS_STATE];

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHARACTER_LIST_REQUEST:
      return {
        ...state,
        error: null,
        isFetching: true,
        characters: null,
      };
    case CHARACTER_LIST_SUCCESS:
      return {
        ...state,
        error: null,
        isFetching: false,
        characters: action.payload.characters,
      };
    case CHARACTER_LIST_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        isFetching: false,
        characters: null,
      };
    default:
      return state;
  }
};

export default reducer;
