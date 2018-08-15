import FortiView from 'layouts/FortiView';
import Logs from 'layouts/Logs';
import Reports from 'layouts/Reports';
import EventManagement from 'layouts/EventManagement';

const analysisRoutes = [
  { path: '/fos/analysis/fortiView', component: FortiView },
  { path: '/fos/analysis/logs', component: Logs },
  { path: '/fos/analysis/reports', component: Reports },
  { path: '/fos/analysis/eventManagement', component: EventManagement },
  {
    redirect: true,
    path: '/fos/analysis',
    pathTo: '/fos/analysis/fortiView'
  }
];

export default analysisRoutes;
