import React, { Fragment } from 'react';
import { Route, Redirect, Switch } from 'react-router';

import * as routes from '../constants/routes';
import SignUpContainer from '../containers/SignUpContainer';
import SignInContainer from '../containers/SignInContainer';

const Routes = () => (
  <Fragment>
    <Switch>
      <Route path={routes.SIGN_IN_ROUTE} component={SignInContainer} />
      <Route path={routes.SIGN_UP_ROUTE} component={SignUpContainer} />
    </Switch>
  </Fragment>
);

export default Routes;
