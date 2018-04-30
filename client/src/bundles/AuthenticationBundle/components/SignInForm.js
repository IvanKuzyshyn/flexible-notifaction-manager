import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'material-ui';
import { Link } from 'react-router-dom';
import Card, { CardContent, CardActions } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import { LinearProgress } from 'material-ui/Progress';
import { FormControlLabel } from 'material-ui/Form';
import { Field, Form } from 'react-final-form';

import { SIGN_UP_ROUTE } from '../constants/routes';
import TextField from '../../CommonBundle/components/forms/TextField';
import Checkbox from '../../CommonBundle/components/forms/Checkbox';
import { composeValidators } from '../../CommonBundle/validators/utils';
import { isRequired, mustBeEmail } from '../../CommonBundle/validators/fields';

const SignInForm = ({ onSubmit, isSigningIn }) => (
  <div className="sign-in-form">
    <Card>
      <Form
        onSubmit={onSubmit}
        initialValues={{ email: '', password: '', remember: true }}
        render={({ handleSubmit, submitting }) => (
          <form onSubmit={handleSubmit}>
            <CardContent>
              <Field
                name="email"
                component={TextField}
                type="email"
                placeholder="Email"
                validate={composeValidators(isRequired, mustBeEmail)}
                fullWidth
              />
              <Field
                name="password"
                component={TextField}
                type="password"
                placeholder="Password"
                validate={isRequired}
                fullWidth
              />
            </CardContent>
            <CardActions>
              <Button
                variant="raised"
                color="primary"
                type="submit"
                disabled={submitting || isSigningIn}
              >
                Sign in
              </Button>
              <FormControlLabel
                control={
                  <Field name="remember" component={Checkbox} type="checkbox" />
                }
                label="Remember me"
              />
            </CardActions>
          </form>
        )}
      />
      <Divider />
      Already have an account?
      <Link to={SIGN_UP_ROUTE}>
        <Button color="secondary">Sign up</Button>
      </Link>
      {isSigningIn && <LinearProgress />}
    </Card>
  </div>
);

SignInForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isSigningIn: PropTypes.bool.isRequired,
};

export default SignInForm;
