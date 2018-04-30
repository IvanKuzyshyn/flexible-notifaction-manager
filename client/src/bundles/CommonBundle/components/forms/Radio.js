import React from 'react';
import MaterialRadio from 'material-ui/Radio';

const Radio = ({
  input: { checked, value, name, onChange, ...restInput },
  meta,
  ...rest
}) => (
  <MaterialRadio
    {...rest}
    name={name}
    inputProps={restInput}
    onChange={onChange}
    checked={!!checked}
    value={value}
  />
);

export default MaterialRadio;
