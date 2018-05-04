import PropTypes from 'prop-types';

export const childrenType = PropTypes.oneOfType([
  PropTypes.element,
  PropTypes.func,
  PropTypes.arrayOf(PropTypes.element),
]);

export const materialUiClassesType = PropTypes.objectOf(PropTypes.string);
