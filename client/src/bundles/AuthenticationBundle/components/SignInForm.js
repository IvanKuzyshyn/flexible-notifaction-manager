import React from 'react';
import PropTypes from 'prop-types';
import { TextField, Button } from 'material-ui';

const SignInForm = ({ onSubmit, onChange }) => (
  <div className="sign-in-form">
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
    <Button variant="raised" color="primary" onClick={onSubmit}>
      Sign in
    </Button>
  </div>
);

SignInForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SignInForm;
