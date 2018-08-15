import React from 'react';

import ComputerIcon from '@material-ui/icons/Computer';
import WallpaperIcon from '@material-ui/icons/Wallpaper';
import SearchIcon from '@material-ui/icons/Search';
import SettingsIcon from '@material-ui/icons/Settings';

import routes from 'routes/sandbox';
import SubHeaderDashboard from 'layouts/SubHeaderDashboard';

const sandboxTabs = [
  { label: 'Dashboard', icon: <ComputerIcon /> },
  {
    label: 'Records',
    icon: <WallpaperIcon />
  },
  { label: 'On-Demand', icon: <SearchIcon /> },
  { label: 'Setting', icon: <SettingsIcon /> }
];

class Sandbox extends React.Component {
  render() {
    const { ...rest } = this.props;
    return (
      <SubHeaderDashboard
        routes={routes}
        tabs={sandboxTabs}
        root="/fos/sandbox/"
        {...rest}
      />
    );
  }
}

export default Sandbox;
