import ManagementDashboard from 'layouts/Dashboard/ManagementDashboard';
import Dashboard from 'layouts/Dashboard/Dashboard';

const indexRoutes = [
  { path: '/management', component: ManagementDashboard },
  { path: '/', component: Dashboard }
];

export default indexRoutes;
