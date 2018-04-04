import React from 'react';
import { Router } from 'react-router';
import createHistory from 'history/createBrowserHistory';

import AuthenticationBundleRoutes from '../bundles/AuthenticationBundle/routes';

const history = createHistory();

const Routes = () => (
  <Router history={history}>
    <AuthenticationBundleRoutes />
  </Router>
);

export default Routes;
