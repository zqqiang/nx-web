import StarBorderIcon from '@material-ui/icons/StarBorder';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

const root = '/fos/analysis/fortiView/';

const fortiViewRoutes = [
  {
    path: root + 'summary',
    name: 'Summary',
    mini: 'S',
    icon: StarBorderIcon
  },
  {
    path: root + 'userDashboard',
    name: 'User Dashboard',
    mini: 'UD',
    icon: AccountBoxIcon
  },
  {
    collapse: true,
    path: root + 'threats',
    name: 'Threats',
    state: 'openThreats',
    icon: NotificationsIcon,
    views: [
      {
        path: root + 'threats/topThreats',
        name: 'Top Threats',
        mini: 'TT'
      },
      {
        path: root + 'threats/ips',
        name: 'IPS',
        mini: 'I'
      }
    ]
  }
];

export default fortiViewRoutes;
