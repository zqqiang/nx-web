import Management from 'layouts/Management';
import Dashboard from 'layouts/Dashboard';
import Fos from 'layouts/Fos';
import Pages from 'layouts/Pages';

const indexRoutes = [
  { path: '/management', component: Management },
  { path: '/fos', component: Fos },
  { path: '/pages', component: Pages },
  { path: '/', component: Dashboard }
];

export default indexRoutes;
