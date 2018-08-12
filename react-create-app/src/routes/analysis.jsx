import FortiView from 'layouts/FortiView';

const analysisRoutes = [
  { path: '/fos/analysis/fortiView', component: FortiView },
  { path: '/fos/analysis/logs' },
  { path: '/fos/analysis/reports' },
  { path: '/fos/analysis/eventManagement' },
  {
    redirect: true,
    path: '/fos/analysis',
    pathTo: '/fos/analysis/fortiView'
  }
];

export default analysisRoutes;
