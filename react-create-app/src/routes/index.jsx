import Management from 'layouts/Management';
import Dashboard from 'layouts/Dashboard';
import Fos from 'layouts/Fos';

const indexRoutes = [
  { path: '/management', component: Management },
  { path: '/fos', component: Fos },
  { path: '/', component: Dashboard }
];

export default indexRoutes;
