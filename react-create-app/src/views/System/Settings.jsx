import React from 'react';

import Grid from '@material-ui/core/Grid';
import GridItem from 'components/Grid/GridItem.jsx';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Typography from '@material-ui/core/Typography';

import Button from 'components/CustomButtons/Button.jsx';
import Card from 'components/Card/Card.jsx';
import CardHeader from 'components/Card/CardHeader.jsx';
import CardBody from 'components/Card/CardBody.jsx';
import CardFooter from 'components/Card/CardFooter.jsx';

import withStyles from '@material-ui/core/styles/withStyles';
import { inject, observer } from 'mobx-react';

const styles = theme => ({
  select: {
    marginTop: '16px',
    marginBottom: '8px'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  }
});

@inject('settingsStore')
@observer
class Settings extends React.Component {
  changeHttpPort = e => this.props.settingsStore.setHttpPort(e.target.value);
  changeHttpsPort = e => this.props.settingsStore.setHttpsPort(e.target.value);
  changeTimezone = e => this.props.settingsStore.setTimezone(e.target.value);
  changeServer = e => this.props.settingsStore.setServer(e.target.value);
  changeSshPort = e => this.props.settingsStore.setSshPort(e.target.value);
  changeIdleTimeout = e =>
    this.props.settingsStore.setIdleTimeout(e.target.value);
  changeTelnetPort = e =>
    this.props.settingsStore.setTelnetPort(e.target.value);
  changeRedirectToHttps = e =>
    this.props.settingsStore.setRedirectToHttps(e.target.checked);
  changeServerDomain = e =>
    this.props.settingsStore.setServerDomain(e.target.value);
  changeSyncInterval = e =>
    this.props.settingsStore.setSyncInterval(e.target.value);
  changeSyncWithNtpServer = e =>
    this.props.settingsStore.setSyncWithNtpServer(e.target.checked);
  render() {
    const { classes } = this.props;
    const {
      httpPort,
      httpsPort,
      timezone,
      syncWithNtpServer,
      server,
      syncInterval,
      serverDomain,
      redirectToHttps,
      telnetPort,
      sshPort,
      idleTimeout
    } = this.props.settingsStore;
    return (
      <div>
        <Grid container>
          <GridItem xs={12} sm={12} md={8}>
            <Card>
              <CardHeader color="info">
                <h4 className={''}>Edit Settings</h4>
              </CardHeader>
              <CardBody>
                <Grid container>
                  <GridItem xs={12} sm={12} md={12}>
                    <Typography variant="headline" component="h2">
                      System Time
                    </Typography>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={12}>
                    <FormControl className={classes.select}>
                      <InputLabel htmlFor="timezone">Time Zone</InputLabel>
                      <Select
                        value={timezone}
                        onChange={this.changeTimezone}
                        inputProps={{ name: 'timezone', id: 'timezone' }}
                      >
                        <MenuItem value={4}>
                          (GMT-8:00)Pacific Time(US & Canada){' '}
                        </MenuItem>
                        <MenuItem value={55}>
                          (GMT+8:00)Beijing,ChongQing,HongKong
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={12}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={syncWithNtpServer}
                          onChange={this.changeSyncWithNtpServer}
                          value="syncWithNtpServer"
                          color="primary"
                        />
                      }
                      label="Synchronize with NTP Server"
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={12}>
                    <FormControl
                      component="fieldset"
                      required
                      className={''}
                      disabled={!syncWithNtpServer}
                    >
                      <RadioGroup
                        aria-label="server"
                        name="server"
                        className={''}
                        value={server}
                        onChange={this.changeServer}
                        row
                      >
                        <FormControlLabel
                          value="fortiguard"
                          control={<Radio color="primary" />}
                          label="Use FortiGuard Server"
                        />
                        <FormControlLabel
                          value="specify"
                          control={<Radio color="primary" />}
                          label="Specify"
                        />
                      </RadioGroup>
                    </FormControl>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={12}>
                    <TextField
                      id="sync-interval"
                      label="Sync Interval"
                      className={classes.textField}
                      value={syncInterval}
                      onChange={this.changeSyncInterval}
                      margin="normal"
                      helperText="(1 - 1440 mins)"
                      disabled={!syncWithNtpServer}
                    />
                    {server === 'specify' && (
                      <TextField
                        id="server-domain"
                        label="Server"
                        className={classes.textField}
                        value={serverDomain}
                        onChange={this.changeServerDomain}
                        margin="normal"
                        disabled={!syncWithNtpServer}
                      />
                    )}
                  </GridItem>
                  <GridItem xs={12} sm={12} md={12}>
                    <Typography variant="headline" component="h2">
                      Administration Settings
                    </Typography>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={12}>
                    <TextField
                      id="http-port"
                      label="HTTP Port"
                      className={classes.textField}
                      value={httpPort}
                      onChange={this.changeHttpPort}
                      margin="normal"
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={12}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={redirectToHttps}
                          onChange={this.changeRedirectToHttps}
                          value="redirectToHttps"
                          color="primary"
                        />
                      }
                      label="Redirect to HTTPS"
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={12}>
                    <TextField
                      id="https-port"
                      label="HTTPS Port"
                      className={classes.textField}
                      value={httpsPort}
                      onChange={this.changeHttpsPort}
                      margin="normal"
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={12}>
                    <TextField
                      id="telnet-port"
                      label="Telnet Port"
                      className={classes.textField}
                      value={telnetPort}
                      onChange={this.changeTelnetPort}
                      margin="normal"
                    />
                    <TextField
                      id="ssh-port"
                      label="SSH Port"
                      className={classes.textField}
                      value={sshPort}
                      onChange={this.changeSshPort}
                      margin="normal"
                    />
                    <TextField
                      id="idle-timeout"
                      label="Idle Timeout"
                      className={classes.textField}
                      value={idleTimeout}
                      onChange={this.changeIdleTimeout}
                      margin="normal"
                      helperText="Minutes (1 - 480)"
                    />
                  </GridItem>
                </Grid>
              </CardBody>
              <CardFooter>
                <Button color="info">Save</Button>
              </CardFooter>
            </Card>
          </GridItem>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Settings);
