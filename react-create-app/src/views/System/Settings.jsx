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
// import { inject, observer } from "../../../node_modules/mobx-react";

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

// const Settings = inject("SettingsStore")(observer());

class Settings extends React.Component {
  state = {
    httpPort: 80,
    httpsPort: 443,
    telnetPort: 23,
    sshPort: 22,
    idleTimeout: 480,
    redirectToHttps: true,
    timezone: 4,
    server: 'fortiguard',
    serverDomain: '',
    syncWithNtpServer: false,
    syncInterval: 200
  };
  handleChange = name => event => {
    const value =
      `checkbox` === event.target.type
        ? event.target.checked
        : event.target.value;
    this.setState({ [name]: value });
  };
  render() {
    const { classes } = this.props;
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
                        value={this.state.timezone}
                        onChange={this.handleChange('timezone')}
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
                          checked={this.state.syncWithNtpServer}
                          onChange={this.handleChange('syncWithNtpServer')}
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
                      disabled={!this.state.syncWithNtpServer}
                    >
                      <RadioGroup
                        aria-label="server"
                        name="server"
                        className={''}
                        value={this.state.server}
                        onChange={this.handleChange('server')}
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
                      value={this.state.syncInterval}
                      onChange={this.handleChange('syncInterval')}
                      margin="normal"
                      helperText="(1 - 1440 mins)"
                      disabled={!this.state.syncWithNtpServer}
                    />
                    {this.state.server === 'specify' && (
                      <TextField
                        id="server-domain"
                        label="Server"
                        className={classes.textField}
                        value={this.state.serverDomain}
                        onChange={this.handleChange('serverDomain')}
                        margin="normal"
                        disabled={!this.state.syncWithNtpServer}
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
                      value={this.state.httpPort}
                      onChange={this.handleChange('httpPort')}
                      margin="normal"
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={12}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={this.state.redirectToHttps}
                          onChange={this.handleChange('redirectToHttps')}
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
                      value={this.state.httpsPort}
                      onChange={this.handleChange('httpsPort')}
                      margin="normal"
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={12}>
                    <TextField
                      id="telnet-port"
                      label="Telnet Port"
                      className={classes.textField}
                      value={this.state.telnetPort}
                      onChange={this.handleChange('telnetPort')}
                      margin="normal"
                    />
                    <TextField
                      id="ssh-port"
                      label="SSH Port"
                      className={classes.textField}
                      value={this.state.sshPort}
                      onChange={this.handleChange('sshPort')}
                      margin="normal"
                    />
                    <TextField
                      id="idle-timeout"
                      label="Idle Timeout"
                      className={classes.textField}
                      value={this.state.idleTimeout}
                      onChange={this.handleChange('idleTimeout')}
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
