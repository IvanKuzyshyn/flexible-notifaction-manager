/* eslint-disable */

import React from 'react';
import MaterialCheckbox from 'material-ui/Checkbox';

const Checkbox = ({
  input: { checked, name, onChange, ...restInput },
  meta,
  ...rest
}) => (
  <MaterialCheckbox
    {...rest}
    name={name}
    inputProps={restInput}
    onChange={onChange}
    checked={!!checked}
  />
);

export default Checkbox;
