import React from 'react';
import routes from 'routes/records';
import MenuForm from 'layouts/MenuForm';

class Records extends React.Component {
  render() {
    const { ...rest } = this.props;
    return <MenuForm routes={routes} {...rest} />;
  }
}

export default Records;
