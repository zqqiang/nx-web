import React from 'react';
import routes from 'routes/view';
import MenuForm from 'layouts/MenuForm';

class FortiView extends React.Component {
  render() {
    const { ...rest } = this.props;
    return <MenuForm routes={routes} {...rest} />;
  }
}

export default FortiView;
