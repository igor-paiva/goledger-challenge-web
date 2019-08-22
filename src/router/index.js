import Vue from 'vue';
import VueRouter from 'vue-router';

import routes from './routes';

import auth from '../services/authentication';

Vue.use(VueRouter);

const Router = new VueRouter({
  scrollBehavior: () => ({ y: 0 }),
  routes,
  mode: process.env.VUE_ROUTER_MODE,
  base: process.env.VUE_ROUTER_BASE,
});

Router.beforeEach((to, from, next) => {
  if (to.name === 'Login') {
    if (auth.checkToken()) {
      return next({ path: '/' });
    }

    return next();
  }

  if (!auth.checkToken()) {
    return next({ name: 'Login' });
  }

  return next();
});

export default Router;
