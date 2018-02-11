import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

const RegistrationForm = ({ onChange }) => (
  <div className="registration-form">
    <TextField label="First name" onChange={onChange('firstName')} fullWidth />
    <TextField label="Last name" onChange={onChange('lastName')} fullWidth />
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
    <TextField
      label="Confirm password"
      onChange={onChange('confirmPassword')}
      variant="password"
      fullWidth
    />
    <Button variant="raised" color="primary">
      Register
    </Button>
  </div>
);

RegistrationForm.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default RegistrationForm;
