import React from 'react';
import { CircularProgress } from 'material-ui/Progress';

const Bootstrapping = () => (
  <div className="bootstrapping">
    <CircularProgress size={100} color="secondary" />
  </div>
);

export default Bootstrapping;
