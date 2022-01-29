import { BOOK_LIST_REQUEST, BOOK_LIST_SUCCESS, BOOK_LIST_FAILURE, BOOKS_STATE } from './constants';
import stateBase from './state';

const initialState = stateBase[BOOKS_STATE];

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case BOOK_LIST_REQUEST:
      return {
        ...state,
        error: null,
        isFetching: true,
        books: null,
      };

    case BOOK_LIST_SUCCESS:
      return {
        ...state,
        error: null,
        isFetching: false,
        books: action.payload.books,
      };

    case BOOK_LIST_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        isFetching: false,
        books: null,
      };

    default:
      return state;
  }
};

export default reducer;
