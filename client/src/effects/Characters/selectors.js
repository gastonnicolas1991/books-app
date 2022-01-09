import { CHARACTERS_STATE } from './constants';

export const getAllCharacters = state => state[CHARACTERS_STATE]?.characters;
