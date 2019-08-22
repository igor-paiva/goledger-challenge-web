import axios from 'axios';
import auth from './authentication';

const { API_URL } = process.env;

const CONFIG = {
  timeout: 5000,
  baseURL: API_URL,
  headers: { Accept: 'application/json' },
};

const mountConfig = () => {
  const token = auth.checkToken();
  const newConfig = Object.assign({}, CONFIG);
  const headers = Object.assign(
    {},
    newConfig.headers,
    { Authorization: `Bearer ${token}` },
  );

  newConfig.headers = headers;

  return newConfig;
};

export default class API {
  get(path = '') {
    this.a = path;

    return axios.get(path, mountConfig()).then(response => response.data);
  }

  post(path = '', data = {}) {
    this.a = path;

    return axios.post(path, data, mountConfig()).then(response => response.data);
  }
}
