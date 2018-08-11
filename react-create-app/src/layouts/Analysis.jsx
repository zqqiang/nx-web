import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import withStyles from '@material-ui/core/styles/withStyles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import SearchIcon from '@material-ui/icons/Search';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import DescriptionIcon from '@material-ui/icons/Description';
import WarningIcon from '@material-ui/icons/Warning';

const styles = theme => ({
  subHeader: {
    position: 'relative',
    top: '64px',
    width: '100%'
  },
  subHeaderFormGroup: {
    display: 'flex'
  },
  wrapper: {
    width: '100%',
    display: 'inline-flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  labelContainer: {
    paddingLeft: '6px',
    paddingRight: '6px'
  },
  label: {
    fontSize: '0.9rem',
    textTransform: 'capitalize'
  },
  labelIcon: {
    minHeight: '48px'
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
    paddingLeft: '30px',
    paddingRight: '30px'
  },
  selectEmpty: {}
});

const analysisTabs = [
  { label: 'FortiView', icon: <SearchIcon /> },
  {
    label: 'Logs',
    icon: <FormatListBulletedIcon />
  },
  { label: 'Reports', icon: <DescriptionIcon /> },
  { label: 'Event Mangement', icon: <WarningIcon /> }
];

class Analysis extends React.Component {
  state = {
    sn: 'FWF60E4Q16025515'
  };
  handleChange = (event, value) => {
    this.props.history.push(`/fos/analysis/` + value);
  };
  handleSelectChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    const { classes, history } = this.props;
    const value =
      _.split(history.location.pathname, '/')[3] !== undefined
        ? _.split(history.location.pathname, '/')[3]
        : _.camelCase(analysisTabs[0].label);

    const select = (
      <FormControl className={classes.formControl}>
        <Select
          value={this.state.sn}
          onChange={this.handleSelectChange}
          name="sn"
          displayEmpty
          className={classes.selectEmpty}
        >
          <MenuItem value={'FWF60E4Q16025515'}>FWF60E4Q16025515</MenuItem>
        </Select>
      </FormControl>
    );

    return (
      <div className={classes.subHeader}>
        <div className={classes.subHeaderFormGroup}>
          {select}
          <Tabs
            value={value}
            onChange={this.handleChange}
            fullWidth
            indicatorColor="secondary"
            textColor="secondary"
          >
            {analysisTabs.map((prop, key) => {
              return (
                <Tab
                  icon={prop.icon}
                  label={prop.label}
                  value={_.camelCase(prop.label)}
                  classes={{
                    wrapper: classes.wrapper,
                    labelContainer: classes.labelContainer,
                    label: classes.label,
                    labelIcon: classes.labelIcon
                  }}
                  key={key}
                />
              );
            })}
          </Tabs>
        </div>
      </div>
    );
  }
}

Analysis.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Analysis);
