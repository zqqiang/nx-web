import Config from 'layouts/Config';

const managementRoutes = [
  { path: '/fos/management/config', component: Config },
  { path: '/fos/management/backup' },
  { path: '/fos/management/upgrade' },
  { path: '/fos/management/script' },
  {
    redirect: true,
    path: '/fos/management',
    pathTo: '/fos/management/config'
  }
];

export default managementRoutes;
