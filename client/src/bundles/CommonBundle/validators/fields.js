import { EMAIL_VALIDATION_REGEXP } from '../constants/regexps';

export const isRequired = value => (value ? undefined : 'Field is required');
export const mustBeNumber = value =>
  isNaN(value) ? 'Field must be a number' : undefined;
export const minLimit = min => value =>
  value.toString().length >= min ? undefined : `Should be greater than ${min}`;
export const mustBeEmail = value =>
  EMAIL_VALIDATION_REGEXP.test(value) ? undefined : 'Field must be an email';
