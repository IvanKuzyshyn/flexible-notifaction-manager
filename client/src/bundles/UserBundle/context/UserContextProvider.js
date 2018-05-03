import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { userDataSelector } from '../selectors/userSelectors';
import { userType } from '../prop-types/userTypes';

const { Provider, Consumer } = React.createContext({ user: {} });

const ProviderContainer = ({ user, children }) => (
  <Provider value={user}>{children}</Provider>
);

ProviderContainer.propTypes = {
  user: userType,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

ProviderContainer.defaultProps = {
  user: {},
};

const mapStateToProps = state => ({ user: userDataSelector(state) });

export { Consumer };

export default connect(mapStateToProps)(ProviderContainer);
