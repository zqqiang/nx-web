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

import Button from 'components/CustomButtons/Button.jsx';
import Card from 'components/Card/Card.jsx';
import CardHeader from 'components/Card/CardHeader.jsx';
import CardBody from 'components/Card/CardBody.jsx';
import CardFooter from 'components/Card/CardFooter.jsx';

import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({});

class Settings extends React.Component {
  state = {
    httpPort: 80,
    httpsPort: 443,
    redirectToHttps: true,
    timezone: 4
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
                    <FormControl className={''}>
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
                      className={classes.textField}
                      value={this.state.httpPort}
                      onChange={this.handleChange('httpPort')}
                      margin="normal"
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
