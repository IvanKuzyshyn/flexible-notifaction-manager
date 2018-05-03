import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import { SIGN_IN_ROUTE } from '../../../AuthenticationBundle/constants/routes';
import AuthenticationGuard from '../../../AuthenticationBundle/guards/AuthenticationGuard';
import { Consumer } from '../../../UserBundle/context/UserContextProvider';

const PrivateRoute = ({ component: Component, ...rest }) => (
  /* eslint-disable react/prop-types */
  <Consumer>
    {user => (
      <Route
        {...rest}
        render={(...props) =>
          AuthenticationGuard.can(user) ? (
            <Component {...props} />
          ) : (
            <Redirect to={{ pathname: SIGN_IN_ROUTE, from: props.location }} />
          )
        }
      />
    )}
  </Consumer>
);

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
    .isRequired,
};

export default PrivateRoute;
