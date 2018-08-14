import FortiView from 'layouts/FortiView';
import Logs from 'layouts/Logs';

const analysisRoutes = [
  { path: '/fos/analysis/fortiView', component: FortiView },
  { path: '/fos/analysis/logs', component: Logs },
  { path: '/fos/analysis/reports' },
  { path: '/fos/analysis/eventManagement' },
  {
    redirect: true,
    path: '/fos/analysis',
    pathTo: '/fos/analysis/fortiView'
  }
];

export default analysisRoutes;
