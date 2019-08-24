const routes = [
  {
    path: '/',
    component: () => import('layouts/default'),
    children: [
      {
        path: '',
        name: 'Dashboard',
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
