import api from '../../services/api';

const actions = {};

actions.getList = ({ commit }) => {
  const url = 'api/mainchannel/airlog-backend/Aeronauta?resolve=true';

  return api.get(url).then(response => commit('setList', response.response));
};

export default actions;
