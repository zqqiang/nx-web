import React from 'react';

import SearchIcon from '@material-ui/icons/Search';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import DescriptionIcon from '@material-ui/icons/Description';
import WarningIcon from '@material-ui/icons/Warning';

import routes from 'routes/management';
import SubHeaderDashboard from './SubHeaderDashboard';

const managementTabs = [
  { label: 'Config', icon: <SearchIcon /> },
  {
    label: 'Backup',
    icon: <FormatListBulletedIcon />
  },
  { label: 'Upgrade', icon: <DescriptionIcon /> },
  { label: 'Script', icon: <WarningIcon /> }
];

class Management extends React.Component {
  render() {
    const { ...rest } = this.props;
    return (
      <SubHeaderDashboard routes={routes} tabs={managementTabs} {...rest} />
    );
  }
}

export default Management;
