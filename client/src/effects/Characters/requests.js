import { requestGET } from '../../utils/requests';
import { mapDataToCharactersList } from './mappers';

const ENDPOINTS = {
  CHARACTER_LIST: 'character',
};

export function getAllCharactersRequest(params) {
  return requestGET({
    data: params,
    endpoint: ENDPOINTS.CHARACTER_LIST,
    mapper: mapDataToCharactersList,
  });
}
