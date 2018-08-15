import StarBorderIcon from '@material-ui/icons/StarBorder';

const root = '/fos/analysis/reports/';

const reportsRoutes = [
  {
    path: root + 'attacks',
    name: 'Attacks',
    mini: 'A',
    icon: StarBorderIcon
  },
  {
    path: root + 'summaryReport',
    name: 'Summary Report',
    mini: 'SR',
    icon: StarBorderIcon
  },
  {
    path: root + 'webActivityReport',
    name: 'Web Activity Report',
    mini: 'WAR',
    icon: StarBorderIcon
  }
];

export default reportsRoutes;
