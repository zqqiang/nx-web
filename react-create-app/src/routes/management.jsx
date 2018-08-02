import Image from '@material-ui/icons/Image';

import Settings from 'views/System/Settings.jsx';

const dashRoutes = [
  {
    collapse: true,
    path: '/system',
    name: 'System',
    state: 'openSystem',
    icon: Image,
    views: [
      {
        path: '/system/settings',
        name: 'Settings',
        mini: 'S',
        component: Settings
      }
    ]
  },
  { redirect: true, path: '/', pathTo: '/system/settings', name: 'Settings' }
];

export default dashRoutes;
