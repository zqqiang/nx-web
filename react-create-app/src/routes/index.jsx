import Management from 'layouts/Management';
import Dashboard from 'layouts/Dashboard';

const indexRoutes = [
  { path: '/management', component: Management },
  { path: '/', component: Dashboard }
];

export default indexRoutes;
