import axios from 'axios';
import auth from './authentication';

const { API_URL } = process.env;

const CONFIG = {
  timeout: 5000,
  baseURL: API_URL,
  headers: { Accept: 'application/json' },
};

const addUserToken = () => {
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

export default {
  get: (path = '') => axios.get(path, addUserToken())
    .then(response => response.data),

  post: (path = '', data = {}) => axios.post(path, data, addUserToken())
    .then(response => response.data),
};
