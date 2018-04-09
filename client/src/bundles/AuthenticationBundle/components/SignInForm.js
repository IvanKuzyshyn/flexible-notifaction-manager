import React from 'react';
import PropTypes from 'prop-types';
import { TextField, Button } from 'material-ui';
import { Link } from 'react-router-dom';
import Card, { CardContent, CardActions } from 'material-ui/Card';
import Divider from 'material-ui/Divider';

import { SIGN_UP_ROUTE } from '../constants/routes';

const SignInForm = ({ onSubmit, onChange }) => (
  <div className="sign-in-form">
    <Card>
      <CardContent>
        <TextField
          label="Email"
          onChange={onChange('email')}
          variant="email"
          fullWidth
        />
        <TextField
          label="Password"
          onChange={onChange('password')}
          variant="password"
          fullWidth
        />
      </CardContent>
      <CardActions>
        <Button variant="raised" color="primary" onClick={onSubmit}>
          Sign in
        </Button>
        <Divider />
        Already have an account?
        <Link to={SIGN_UP_ROUTE}>
          <Button color="secondary">Register</Button>
        </Link>
      </CardActions>
    </Card>
  </div>
);

SignInForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SignInForm;
