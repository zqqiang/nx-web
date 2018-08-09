import SettingsIcon from '@material-ui/icons/Settings';
import Dvr from '@material-ui/icons/Dvr';
import ArtTrack from '@material-ui/icons/ArtTrack';

import Settings from 'views/System/Settings.jsx';

const dashRoutes = [
  {
    collapse: true,
    path: '/management/system',
    name: 'System',
    state: 'openSystem',
    icon: SettingsIcon,
    views: [
      {
        path: '/management/system/settings',
        name: 'Settings',
        mini: 'S',
        component: Settings
      },
      {
        path: '/management/system/administrator',
        name: 'Administrator',
        mini: 'A'
      },
      {
        path: '/management/system/adminProfiles',
        name: 'Admin Profiles',
        mini: 'AP'
      },
      {
        path: '/management/system/fortiGuard',
        name: 'ForktiGuard',
        mini: 'FG'
      },
      {
        path: '/management/system/advanced',
        name: 'Advanced',
        mini: 'A'
      }
    ]
  },
  {
    collapse: true,
    path: '/management/network',
    name: 'Network',
    state: 'openNetwork',
    icon: Dvr,
    views: [
      {
        path: '/management/network/interfaces',
        name: 'Interfaces',
        mini: 'I'
      },
      {
        path: '/management/network/dns',
        name: 'DNS',
        mini: 'D'
      },
      {
        path: '/management/network/dnsServers',
        name: 'DNS Servers',
        mini: 'DS'
      },
      {
        path: '/management/network/staticRoutes',
        name: 'Static Routes',
        mini: 'SR'
      },
      {
        path: '/management/network/policyRoutes',
        name: 'Policy Routes',
        mini: 'PR'
      },
      {
        path: '/management/network/multicast',
        name: 'Multicast',
        mini: 'M'
      }
    ]
  },
  {
    collapse: true,
    path: '/management/policyObjects',
    name: 'Policy & Objects',
    state: 'openPolicyObjects',
    icon: ArtTrack,
    views: [
      {
        path: '/management/policyObjects/ipv4Policy',
        name: 'IPv4 Policy',
        mini: 'IP'
      },
      {
        path: '/management/policyObjects/addresses',
        name: 'Addresses',
        mini: 'A'
      },
      {
        path: '/management/policyObjects/services',
        name: 'Services',
        mini: 'S'
      },
      {
        path: '/management/policyObjects/schedules',
        name: 'Schedules',
        mini: 'S'
      },
      {
        path: '/management/policyObjects/virtualIps',
        name: 'Virtual IPs',
        mini: 'VIP'
      },
      {
        path: '/management/policyObjects/ipPools',
        name: 'IP Pools',
        mini: 'IP'
      },
      {
        path: '/management/policyObjects/trafficShapers',
        name: 'Traffic Shapers',
        mini: 'TS'
      },
      {
        path: '/management/policyObjects/trafficShapingPolicy',
        name: 'Traffic Shaping Policy',
        mini: 'TSP'
      }
    ]
  },
  {
    redirect: true,
    path: '/management',
    pathTo: '/management/system/settings',
    name: 'Settings'
  }
];

export default dashRoutes;
