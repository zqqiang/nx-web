import FortiView from 'layouts/FortiView';
import Logs from 'layouts/Logs';
import Reports from 'layouts/Reports';

const analysisRoutes = [
  { path: '/fos/analysis/fortiView', component: FortiView },
  { path: '/fos/analysis/logs', component: Logs },
  { path: '/fos/analysis/reports', component: Reports },
  { path: '/fos/analysis/eventManagement' },
  {
    redirect: true,
    path: '/fos/analysis',
    pathTo: '/fos/analysis/fortiView'
  }
];

export default analysisRoutes;
