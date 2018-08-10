import Analysis from 'layouts/Analysis';
import Management from 'layouts/Management';
import Sandbox from 'layouts/Sandbox';

const fosRoutes = [
  { path: '/fos/analysis', component: Analysis },
  { path: '/fos/management', component: Management },
  { path: '/fos/sandbox', component: Sandbox },
  {
    redirect: true,
    path: '/fos',
    pathTo: '/fos/analysis'
  }
];

export default fosRoutes;
