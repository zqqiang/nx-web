import SettingsIcon from '@material-ui/icons/Settings';
import Dvr from '@material-ui/icons/Dvr';
import ArtTrack from '@material-ui/icons/ArtTrack';

import Settings from 'views/System/Settings.jsx';

const dashRoutes = [
  {
    collapse: true,
    path: '/system',
    name: 'System',
    state: 'openSystem',
    icon: SettingsIcon,
    views: [
      {
        path: '/system/settings',
        name: 'Settings',
        mini: 'S',
        component: Settings
      },
      {
        path: '/system/administrator',
        name: 'Administrator',
        mini: 'A'
      },
      {
        path: '/system/adminProfiles',
        name: 'Admin Profiles',
        mini: 'AP'
      },
      {
        path: '/system/fortiGuard',
        name: 'ForktiGuard',
        mini: 'FG'
      },
      {
        path: '/system/advanced',
        name: 'Advanced',
        mini: 'A'
      }
    ]
  },
  {
    collapse: true,
    path: '/network',
    name: 'Network',
    state: 'openNetwork',
    icon: Dvr,
    views: [
      {
        path: '/network/interfaces',
        name: 'Interfaces',
        mini: 'I'
      },
      {
        path: '/network/dns',
        name: 'DNS',
        mini: 'D'
      },
      {
        path: '/network/dnsServers',
        name: 'DNS Servers',
        mini: 'DS'
      },
      {
        path: '/network/staticRoutes',
        name: 'Static Routes',
        mini: 'SR'
      },
      {
        path: '/network/policyRoutes',
        name: 'Policy Routes',
        mini: 'PR'
      },
      {
        path: '/network/multicast',
        name: 'Multicast',
        mini: 'M'
      }
    ]
  },
  {
    collapse: true,
    path: '/policyObjects',
    name: 'Policy & Objects',
    state: 'openPolicyObjects',
    icon: ArtTrack,
    views: [
      {
        path: '/policyObjects/ipv4Policy',
        name: 'IPv4 Policy',
        mini: 'IP'
      },
      {
        path: '/policyObjects/addresses',
        name: 'Addresses',
        mini: 'A'
      },
      {
        path: '/policyObjects/services',
        name: 'Services',
        mini: 'S'
      },
      {
        path: '/policyObjects/schedules',
        name: 'Schedules',
        mini: 'S'
      },
      {
        path: '/policyObjects/virtualIps',
        name: 'Virtual IPs',
        mini: 'VIP'
      },
      {
        path: '/policyObjects/ipPools',
        name: 'IP Pools',
        mini: 'IP'
      },
      {
        path: '/policyObjects/trafficShapers',
        name: 'Traffic Shapers',
        mini: 'TS'
      },
      {
        path: '/policyObjects/trafficShapingPolicy',
        name: 'Traffic Shaping Policy',
        mini: 'TSP'
      }
    ]
  },
  { redirect: true, path: '/', pathTo: '/system/settings', name: 'Settings' }
];

export default dashRoutes;
