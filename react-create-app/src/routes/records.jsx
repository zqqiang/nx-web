import NoteIcon from '@material-ui/icons/Note';

const root = '/fos/sandbox/records/';

const recordsRoutes = [
  {
    collapse: true,
    path: root + 'files',
    name: 'Files',
    state: 'openFiles',
    icon: NoteIcon,
    views: [
      {
        path: root + 'maliciousByFirstScan',
        name: 'Malicious by first scan',
        mini: 'M'
      },
      {
        path: root + 'suspiciousHigh',
        name: 'Suspicious High',
        mini: 'SH'
      },
      {
        path: root + 'suspiciousMedum',
        name: 'Suspicious Medium',
        mini: 'SM'
      },
      {
        path: root + 'suspiciousLow',
        name: 'Suspicious Low',
        mini: 'SL'
      },
      {
        path: root + 'clean',
        name: 'Clean',
        mini: 'C'
      },
      {
        path: root + 'waitingForProcessing',
        name: 'Waiting for processing',
        mini: 'W'
      }
    ]
  }
];

export default recordsRoutes;
