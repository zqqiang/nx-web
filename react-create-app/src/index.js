import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'mobx-react';

import 'assets/css/material-dashboard-react.css?v=1.3.0';

import registerServiceWorker from 'registerServiceWorker';

import indexRoutes from 'routes/index.jsx';

import settingsStore from 'stores/settingsStore';

const stores = {
  settingsStore
};

const hist = createBrowserHistory();

ReactDOM.render(
  <Provider {...stores}>
    <Router history={hist}>
      <Switch>
        {indexRoutes.map((prop, key) => {
          return (
            <Route path={prop.path} component={prop.component} key={key} />
          );
        })}
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
