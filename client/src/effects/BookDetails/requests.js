import { requestGET, buildPathParams } from '../../utils/requests';
import { mapDataToBookDetail } from './mappers';

const ENDPOINTS = {
  BOOK_DETAIL: 'items/{id}',
};

export function getBookDetailRequest(params) {
  return requestGET({
    endpoint: buildPathParams(ENDPOINTS.BOOK_DETAIL, { id: params?.id }),
    mapper: mapDataToBookDetail,
  });
}
