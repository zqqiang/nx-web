import StarBorderIcon from '@material-ui/icons/StarBorder';

const root = '/fos/analysis/eventManagement/';

const eventManagementRoutes = [
  {
    path: root + 'allEvents',
    name: 'All Events',
    mini: 'AE',
    icon: StarBorderIcon
  },
  {
    path: root + 'eventHandlers',
    name: 'Event Handlers',
    mini: 'EH',
    icon: StarBorderIcon
  }
];

export default eventManagementRoutes;
