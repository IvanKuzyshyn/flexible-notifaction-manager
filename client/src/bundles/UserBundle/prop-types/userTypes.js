import PropTypes from 'prop-types';

export const userType = PropTypes.shape({
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  token: PropTypes.string,
});
