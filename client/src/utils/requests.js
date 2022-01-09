import axios from 'axios';

const OPTIONS = {
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
};

export function requestGET({ endpoint, mapper, data }) {
  return axios
    .get(`${process.env.API_URL}/${endpoint}`, { params: data }, OPTIONS)
    .then(res => ({ data: mapper(res.data), status: res.status }))
    .catch(error => error.response);
}
