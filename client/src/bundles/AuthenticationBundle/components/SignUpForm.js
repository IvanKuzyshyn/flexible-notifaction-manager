import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Divider from 'material-ui/es/Divider/Divider';
import { Link } from 'react-router-dom';
import { Field, Form } from 'react-final-form';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import { LinearProgress } from 'material-ui/Progress';
import Card, { CardContent, CardActions } from 'material-ui/Card';

import { SIGN_IN_ROUTE } from '../constants/routes';
import TextField from '../../CommonBundle/components/forms/TextField';
import { composeValidators } from '../../CommonBundle/validators/utils';
import {
  isRequired,
  mustBeEmail,
  minLimit,
} from '../../CommonBundle/validators/fields';
import { errorResponseType } from '../../CommonBundle/prop-types/response-types';

const RegistrationForm = ({ onSubmit, onValidate, isSigningUp, error }) => (
  <div className="sign-up-form">
    <Card>
      <Form
        onSubmit={onSubmit}
        validate={onValidate}
        render={({ handleSubmit, submitting }) => (
          <form onSubmit={handleSubmit}>
            <CardContent>
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

              {error && (
                <Paper elevation={4}>
                  <Typography variant="title" gutterBottom>
                    {error.message}
                  </Typography>
                </Paper>
              )}
            </CardContent>
            <CardActions>
              <Button
                variant="raised"
                color="primary"
                type="submit"
                disabled={submitting}
              >
                Sign up
              </Button>
            </CardActions>
          </form>
        )}
      />
      {isSigningUp && <LinearProgress />}
    </Card>
    <Divider />
    <Link to={SIGN_IN_ROUTE}>
      <Button color="secondary">Sign in</Button>
    </Link>
  </div>
);

RegistrationForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onValidate: PropTypes.func.isRequired,
  isSigningUp: PropTypes.bool.isRequired,
  error: errorResponseType,
};

RegistrationForm.defaultProps = {
  error: null,
};

export default RegistrationForm;
