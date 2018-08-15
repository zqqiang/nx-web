import Dashboard from 'views/Sandbox/Dashboard';
import Records from 'layouts/Records';
import OnDemand from 'layouts/OnDemand';
import Setting from 'views/Sandbox/Setting';

const root = '/fos/sandbox/';

const sandboxRoutes = [
  { path: root + 'dashboard', component: Dashboard },
  { path: root + 'records', component: Records },
  { path: root + 'onDemand', component: OnDemand },
  { path: root + 'setting', component: Setting },
  {
    redirect: true,
    path: root,
    pathTo: root + 'dashboard'
  }
];

export default sandboxRoutes;
