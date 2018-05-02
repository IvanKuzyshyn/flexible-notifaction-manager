import PropTypes from 'prop-types';

export const errorResponseType = PropTypes.shape({
  message: PropTypes.string.isRequired,
});
