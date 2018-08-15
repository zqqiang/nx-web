import React from 'react';
import routes from 'routes/onDemand';
import MenuForm from 'layouts/MenuForm';

class OnDemand extends React.Component {
  render() {
    const { ...rest } = this.props;
    return <MenuForm routes={routes} {...rest} />;
  }
}

export default OnDemand;
