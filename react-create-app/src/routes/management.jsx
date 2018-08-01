import Todos from 'views/Todos';
import Settings from 'views/System/Settings.jsx';

const dashRoutes = [
  {
    path: '/todos',
    name: 'Todos',
    component: Todos
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  },
  { redirect: true, path: '/', pathTo: '/todos', name: 'Todos' }
];

export default dashRoutes;
