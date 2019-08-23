const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('layouts/default'),
    children: [
      {
        path: '',
        component: () => import('pages/Index'),
      },
    ],
  },
  {
    path: '/login',
    component: () => import('layouts/empty'),
    children: [
      {
        path: '',
        name: 'Login',
        component: () => import('pages/login'),
      },
    ],
  },
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404'),
  });
}

export default routes;
