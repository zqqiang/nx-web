import Dashboard from '@material-ui/icons/Dashboard';
import Person from '@material-ui/icons/Person';

import DashboardPage from 'views/Dashboard/Dashboard.jsx';

const dashboardRoutes = [
  {
    path: '/dashboard',
    sidebarName: 'Dashboard',
    navbarName: 'Material Dashboard',
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: '/user',
    sidebarName: 'User Profile',
    navbarName: 'Profile',
    icon: Person
    // component: UserProfile
  }
];
export default dashboardRoutes;
