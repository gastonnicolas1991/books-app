import {
  BOOK_DETAIL_STATE,
  BOOK_DETAIL_SUCCESS,
  BOOK_DETAIL_REQUEST,
  BOOK_DETAIL_FAILURE,
} from './constants';
import stateBase from './state';

const initialState = stateBase[BOOK_DETAIL_STATE];

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case BOOK_DETAIL_REQUEST:
      return {
        ...state,
        error: null,
        isFetching: true,
        book: null,
      };

    case BOOK_DETAIL_SUCCESS:
      return {
        ...state,
        error: null,
        isFetching: false,
        book: action.payload.book,
      };

    case BOOK_DETAIL_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        isFetching: false,
        book: null,
      };

    default:
      return state;
  }
};

export default reducer;
