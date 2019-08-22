import { LocalStorage } from 'quasar';

const auth = {};

auth.checkToken = () => LocalStorage.getItem('user-token');

auth.setToken = (token) => {
  if (token) {
    localStorage.setItem('user-token', token);
  }
};

auth.logout = () => LocalStorage.set('user-token', '');

export default auth;
