import StarBorderIcon from '@material-ui/icons/StarBorder';

const root = '/fos/analysis/logs/';

const logsRoutes = [
  {
    path: root + 'trafficLogs',
    name: 'Traffic Logs',
    mini: 'TL',
    icon: StarBorderIcon
  },
  {
    path: root + 'webFilterLogs',
    name: 'Web Filter Logs',
    mini: 'WFL',
    icon: StarBorderIcon
  }
];

export default logsRoutes;
