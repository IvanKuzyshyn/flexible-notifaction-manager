import React, { Fragment } from 'react';
import { Router } from 'react-router';
import createHistory from 'history/createBrowserHistory';

import AuthenticationBundleRoutes from '../bundles/AuthenticationBundle/routes';
import UserBundleRoutes from '../bundles/UserBundle/routes';

const history = createHistory();

const Routes = () => (
  <Router history={history}>
    <Fragment>
      <AuthenticationBundleRoutes />
      <UserBundleRoutes />
    </Fragment>
  </Router>
);

export default Routes;
