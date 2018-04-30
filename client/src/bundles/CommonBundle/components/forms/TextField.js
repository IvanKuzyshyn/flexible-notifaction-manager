/* eslint-disable */
// TODO Set correct types after flow migration


import React from 'react';
import MaterialTextField from 'material-ui/TextField';

const TextField = ({
  input: { name, onChange, value, ...restInput },
  meta,
  ...rest
}) => (
  <MaterialTextField
    {...rest}
    name={name}
    helperText={meta.touched ? meta.error : undefined}
    error={meta.error && meta.touched}
    inputProps={restInput}
    onChange={onChange}
    value={value}
  />
);

export default TextField;
