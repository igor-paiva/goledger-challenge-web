import Vue from 'vue';
import Vuex from 'vuex';

import user from './user';
import pilot from './pilot';

Vue.use(Vuex);

const Store = new Vuex.Store({
  modules: {
    user,
    pilot,
  },
});

export default Store;
