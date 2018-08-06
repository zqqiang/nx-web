import React from 'react';
// import PropTypes from "prop-types";
import classNames from 'classnames';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

import Search from '@material-ui/icons/Search';
import ExpandMore from '@material-ui/icons/ExpandMore';

const styles = theme => ({
  input: {
    margin: theme.spacing.unit
  },
  button: {
    margin: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  iconSmall: {
    fontSize: 20
  },
  flex: {
    flexGrow: 1
  }
});

class Header extends React.Component {
  state = {
    includingLowerLevel: true
  };
  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  render() {
    const { classes } = this.props;

    return (
      <FormGroup row>
        <div className={classes.flex}>
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.includingLowerLevel}
                onChange={this.handleChange('includingLowerLevel')}
                value="includingLowerLevel"
              />
            }
            label="Including lower level"
          />
          <Input
            placeholder="Search FortiGate"
            className={classes.input}
            inputProps={{ 'aria-label': 'Description' }}
          />
          <Button
            variant="contained"
            size="small"
            color="primary"
            className={classes.button}
          >
            <Search
              className={classNames(classes.leftIcon, classes.iconSmall)}
            />
            Search
          </Button>
          <Button variant="outlined" className={classes.button}>
            Add Filter
            <ExpandMore />
          </Button>
          <span>Sort by</span>
          <Button variant="outlined" className={classes.button}>
            SN
            <ExpandMore />
          </Button>
        </div>
        <Button color="primary" className={classes.button}>
          Inventory
        </Button>
        <Button
          variant="contained"
          size="small"
          color="primary"
          className={classes.button}
        >
          Add FortiGate
        </Button>
        <Button
          variant="contained"
          size="small"
          color="primary"
          className={classes.button}
        >
          Group Management
          <ExpandMore />
        </Button>
      </FormGroup>
    );
  }
}

export default withStyles(styles)(Header);
