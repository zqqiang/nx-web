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

import Button from 'components/CustomButtons/Button.jsx';
import Card from 'components/Card/Card.jsx';
import CardHeader from 'components/Card/CardHeader.jsx';
import CardBody from 'components/Card/CardBody.jsx';
import CardFooter from 'components/Card/CardFooter.jsx';

import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  group: {
    margin: `${theme.spacing.unit}px 0`
  }
});

class Settings extends React.Component {
  state = {
    httpPort: 80,
    httpsPort: 443,
    redirectToHttps: true,
    timezone: 4,
    server: 'fortiguard'
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
                <h4 className={classes.cardTitleWhite}>Edit Settings</h4>
              </CardHeader>
              <CardBody>
                <Grid container>
                  <GridItem xs={12} sm={12} md={12}>
                    <FormControl className={classes.formControl}>
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
                    <TextField
                      id="http-port"
                      label="HTTP Port"
                      className={classes.formControl}
                      value={this.state.httpPort}
                      onChange={this.handleChange('httpPort')}
                      margin="normal"
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={12}>
                    <TextField
                      id="https-port"
                      label="HTTPS Port"
                      className={classes.formControl}
                      value={this.state.httpsPort}
                      onChange={this.handleChange('httpsPort')}
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
                    <FormControl
                      component="fieldset"
                      required
                      className={classes.formControl}
                    >
                      <RadioGroup
                        aria-label="server"
                        name="server"
                        className={classes.group}
                        value={this.state.server}
                        onChange={this.handleChange('server')}
                      >
                        <FormControlLabel
                          value="fortiguard"
                          control={<Radio />}
                          label="Use FortiGuard Server"
                        />
                        <FormControlLabel
                          value="specify"
                          control={<Radio />}
                          label="Specify"
                        />
                      </RadioGroup>
                    </FormControl>
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
