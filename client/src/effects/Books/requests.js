import { requestGET } from '../../utils/requests';
import { mapDataToBookList } from './mappers';

const ENDPOINTS = {
  BOOK_LIST: 'items',
};

export function getAllBooksRequest(params) {
  return requestGET({
    data: params,
    endpoint: ENDPOINTS.BOOK_LIST,
    mapper: mapDataToBookList,
  });
}
