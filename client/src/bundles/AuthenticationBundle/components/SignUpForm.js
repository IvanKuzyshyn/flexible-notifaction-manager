import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Divider from 'material-ui/es/Divider/Divider';
import { Link } from 'react-router-dom';
import { Field, Form } from 'react-final-form';

import { SIGN_IN_ROUTE } from '../constants/routes';
import TextField from '../../CommonBundle/components/forms/TextField';
import { composeValidators } from '../../CommonBundle/validators/utils';
import {
  isRequired,
  mustBeEmail,
  minLimit,
} from '../../CommonBundle/validators/fields';

const RegistrationForm = ({ onSubmit, onValidate }) => (
  <div className="sign-up-form">
    <Form
      onSubmit={onSubmit}
      validate={onValidate}
      render={({ handleSubmit, submitting }) => (
        <form onSubmit={handleSubmit}>
          <Field
            name="firstName"
            component={TextField}
            type="text"
            placeholder="Enter your first name"
            validate={isRequired}
            fullWidth
          />
          <Field
            name="lastName"
            component={TextField}
            type="text"
            placeholder="Enter your last name"
            validate={isRequired}
            fullWidth
          />
          <Field
            name="email"
            component={TextField}
            type="email"
            placeholder="Enter your email"
            validate={composeValidators(isRequired, mustBeEmail)}
            fullWidth
          />
          <Field
            name="password"
            component={TextField}
            type="password"
            placeholder="Enter password"
            validate={composeValidators(isRequired, minLimit(8))}
            fullWidth
          />
          <Field
            name="confirmPassword"
            component={TextField}
            type="password"
            placeholder="Confirm your password"
            validate={composeValidators(isRequired, minLimit(8))}
            fullWidth
          />
          <Button
            variant="raised"
            color="primary"
            type="submit"
            disabled={submitting}
          >
            Sign up
          </Button>
        </form>
      )}
    />
    <Divider />
    <Link to={SIGN_IN_ROUTE}>
      <Button color="secondary">Sign in</Button>
    </Link>
  </div>
);

RegistrationForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onValidate: PropTypes.func.isRequired,
};

export default RegistrationForm;
