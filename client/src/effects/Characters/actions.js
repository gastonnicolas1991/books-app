import {
  CHARACTER_LIST_REQUEST,
  CHARACTER_LIST_SUCCESS,
  CHARACTER_LIST_FAILURE,
} from './constants';

export const fetchCharactersRequestAction = payload => ({
  type: CHARACTER_LIST_REQUEST,
  payload,
});

export const fetchCharactersSuccessAction = payload => ({
  type: CHARACTER_LIST_SUCCESS,
  payload,
});

export const fetchCharactersFailureAction = payload => ({
  type: CHARACTER_LIST_FAILURE,
  payload,
});
