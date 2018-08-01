import ManagementDashboard from 'layouts/Dashboard/ManagementDashboard';
import Dashboard from 'layouts/Dashboard/Dashboard';

const indexRoutes = [
  { path: '/dashboard', component: Dashboard },
  { path: '/', component: ManagementDashboard }
];

export default indexRoutes;
