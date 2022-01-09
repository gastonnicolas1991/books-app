import { CHARACTERS_STATE } from './constants';

const state = {
  [CHARACTERS_STATE]: {
    error: null,
    isFetching: true,
    characterList: null,
  },
};

export default state;
