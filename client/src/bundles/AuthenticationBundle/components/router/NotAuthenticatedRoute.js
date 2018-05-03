import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import { ROOT_ROUTE } from '../../../UserBundle/constants/routes';
import AuthenticationGuard from '../../../AuthenticationBundle/guards/AuthenticationGuard';
import { Consumer } from '../../../UserBundle/context/UserContextProvider';

const NotAuthenticatedRoute = ({ component: Component, ...rest }) => (
  /* eslint-disable react/prop-types */
  <Consumer>
    {user => (
      <Route
        {...rest}
        render={(...props) =>
          AuthenticationGuard.can(user) ? (
            <Redirect to={{ pathname: ROOT_ROUTE, from: props.location }} />
          ) : (
            <Component {...props} />
          )
        }
      />
    )}
  </Consumer>
);

NotAuthenticatedRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
    .isRequired,
};

export default NotAuthenticatedRoute;
