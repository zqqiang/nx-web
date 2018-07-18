import Dashboard from '@material-ui/icons/Dashboard';
import Person from '@material-ui/icons/Person';

import SettingsPage from 'views/System/Settings.jsx';

const dashboardRoutes = [
  {
    path: '/settings',
    sidebarName: 'Settings',
    navbarName: 'System Settings',
    icon: Dashboard,
    component: SettingsPage
  },
  {
    path: '/administrator',
    sidebarName: 'Administrator',
    navbarName: 'System Administrator',
    icon: Person
    // component: UserProfile
  },
  { redirect: true, path: '/', to: '/settings', navbarName: 'Redirect' }
];
export default dashboardRoutes;
