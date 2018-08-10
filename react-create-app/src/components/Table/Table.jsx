import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 700
  },
  link: {
    color: 'inherit',
    '&:hover': {
      outline: 'none'
    },
    '&,&:hover,&:focus': {
      color: 'inherit'
    }
  }
});

let id = 0;
function createData(
  sn,
  name,
  subAccount,
  firmware,
  status,
  latestReport,
  lastLogUpload,
  subscription
) {
  id += 1;
  return {
    id,
    sn,
    name,
    subAccount,
    firmware,
    status,
    latestReport,
    lastLogUpload,
    subscription
  };
}

const data = [
  createData(
    'FGT30E3U17023830',
    'FGT30E3U17023830',
    '<Default>',
    'v5.6.3-1547',
    '',
    '',
    '2018-08-08 17:58',
    ''
  ),
  createData(
    'FGT30E3U17023831',
    'FGT30E3U17023831',
    '<Default>',
    'v5.6.4-1547',
    '',
    '',
    '2018-08-08 17:58',
    ''
  ),
  createData(
    'FGT30E3U17023832',
    'FGT30E3U17023832',
    '<Default>',
    'v5.6.5-1547',
    '',
    '',
    '2018-08-08 17:58',
    ''
  )
];

class MainTable extends React.Component {
  render() {
    const { classes, mode } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            {mode === 'fos' && (
              <TableRow>
                <TableCell>SN</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Sub Account</TableCell>
                <TableCell>Firmware</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Latest Report</TableCell>
                <TableCell>Last Log Upload</TableCell>
                <TableCell>Subscription</TableCell>
              </TableRow>
            )}
            {mode === 'ap' && (
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Sub Account</TableCell>
                <TableCell>{`AP Up > 24 hrs`}</TableCell>
                <TableCell>{`AP Up < 24 hrs`}</TableCell>
                <TableCell>AP Down</TableCell>
                <TableCell>{`SSID & Users`}</TableCell>
              </TableRow>
            )}
          </TableHead>
          <TableBody>
            {mode === 'fos' &&
              data.map(n => {
                return (
                  <TableRow key={n.id}>
                    <TableCell component="th" scope="row">
                      <NavLink to={`/fos`} className={classes.link}>
                        {n.sn}
                      </NavLink>
                    </TableCell>
                    <TableCell>
                      <NavLink to={`/fos`} className={classes.link}>
                        {n.name}
                      </NavLink>
                    </TableCell>
                    <TableCell>{n.subAccount}</TableCell>
                    <TableCell>{n.firmware}</TableCell>
                    <TableCell>{n.status}</TableCell>
                    <TableCell>{n.latestReport}</TableCell>
                    <TableCell>{n.lastLogUpload}</TableCell>
                    <TableCell>{n.subscription}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

MainTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MainTable);
