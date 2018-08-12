import SettingsIcon from '@material-ui/icons/Settings';
import Dvr from '@material-ui/icons/Dvr';
import ArtTrack from '@material-ui/icons/ArtTrack';

import Settings from 'views/System/Settings.jsx';

const root = '/fos/management/config/';

const configRoutes = [
  {
    collapse: true,
    path: root + 'system',
    name: 'System',
    state: 'openSystem',
    icon: SettingsIcon,
    views: [
      {
        path: root + 'system/settings',
        name: 'Settings',
        mini: 'S',
        component: Settings
      },
      {
        path: root + 'system/administrator',
        name: 'Administrator',
        mini: 'A'
      },
      {
        path: root + 'system/adminProfiles',
        name: 'Admin Profiles',
        mini: 'AP'
      },
      {
        path: root + 'system/fortiGuard',
        name: 'ForktiGuard',
        mini: 'FG'
      },
      {
        path: root + 'system/advanced',
        name: 'Advanced',
        mini: 'A'
      }
    ]
  },
  {
    collapse: true,
    path: root + 'network',
    name: 'Network',
    state: 'openNetwork',
    icon: Dvr,
    views: [
      {
        path: root + 'network/interfaces',
        name: 'Interfaces',
        mini: 'I'
      },
      {
        path: root + 'network/dns',
        name: 'DNS',
        mini: 'D'
      },
      {
        path: root + 'network/dnsServers',
        name: 'DNS Servers',
        mini: 'DS'
      },
      {
        path: root + 'network/staticRoutes',
        name: 'Static Routes',
        mini: 'SR'
      },
      {
        path: root + 'network/policyRoutes',
        name: 'Policy Routes',
        mini: 'PR'
      },
      {
        path: root + 'network/multicast',
        name: 'Multicast',
        mini: 'M'
      }
    ]
  },
  {
    collapse: true,
    path: root + 'policyObjects',
    name: 'Policy & Objects',
    state: 'openPolicyObjects',
    icon: ArtTrack,
    views: [
      {
        path: root + 'policyObjects/ipv4Policy',
        name: 'IPv4 Policy',
        mini: 'IP'
      },
      {
        path: root + 'policyObjects/addresses',
        name: 'Addresses',
        mini: 'A'
      },
      {
        path: root + 'policyObjects/services',
        name: 'Services',
        mini: 'S'
      },
      {
        path: root + 'policyObjects/schedules',
        name: 'Schedules',
        mini: 'S'
      },
      {
        path: root + 'policyObjects/virtualIps',
        name: 'Virtual IPs',
        mini: 'VIP'
      },
      {
        path: root + 'policyObjects/ipPools',
        name: 'IP Pools',
        mini: 'IP'
      },
      {
        path: root + 'policyObjects/trafficShapers',
        name: 'Traffic Shapers',
        mini: 'TS'
      },
      {
        path: root + 'policyObjects/trafficShapingPolicy',
        name: 'Traffic Shaping Policy',
        mini: 'TSP'
      }
    ]
  },
  {
    redirect: true,
    path: root,
    pathTo: root + 'system/settings',
    name: 'Settings'
  }
];

export default configRoutes;
