import StarBorderIcon from '@material-ui/icons/StarBorder';

const root = '/fos/sandbox/onDemand/';

const onDemandRoutes = [
  {
    path: root + 'maliciousByFirstScan',
    name: 'Malicious by first scan',
    mini: 'M',
    icon: StarBorderIcon
  },
  {
    path: root + 'suspiciousHigh',
    name: 'Suspicious High',
    mini: 'SH',
    icon: StarBorderIcon
  },
  {
    path: root + 'suspiciousMedum',
    name: 'Suspicious Medium',
    mini: 'SM',
    icon: StarBorderIcon
  },
  {
    path: root + 'suspiciousLow',
    name: 'Suspicious Low',
    mini: 'SL',
    icon: StarBorderIcon
  },
  {
    path: root + 'clean',
    name: 'Clean',
    mini: 'C',
    icon: StarBorderIcon
  },
  {
    path: root + 'waitingForProcessing',
    name: 'Waiting for processing',
    mini: 'W',
    icon: StarBorderIcon
  }
];

export default onDemandRoutes;
