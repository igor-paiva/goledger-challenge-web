import { Notify } from 'quasar';

import auth from '../../services/authentication';
import API from '../../services/api';
import router from '../../router';

const api = new API();

const actions = {};

const loginSuccessHandler = () => router.push({ name: 'Dashboard' });

actions.login = (_, credentials) => api.post('/api/login', credentials)
  .then((response) => {
    auth.setToken(response);

    return loginSuccessHandler();
  })
  .catch(() => {
    Notify.create({ message: 'Usuário e/ou senha incorretos!', color: 'warning' });
  });

export default actions;
