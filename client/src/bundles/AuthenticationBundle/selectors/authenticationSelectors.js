import { createSelector } from 'reselect';

const signInStateSelector = ({ authentication }) => authentication.isSigningIn;
const signUpStateSelector = ({ authentication }) => authentication.isSigningUp;
const signInErrorSelector = ({ authentication }) =>
  authentication.signingInError;
const signUpErrorSelector = ({ authentication }) =>
  authentication.signingUpError;

export const signInDataSelector = createSelector(
  signInStateSelector,
  signInErrorSelector,
  (isProcessing, error) => ({ isProcessing, error }),
);

export const signUpDataSelector = createSelector(
  signUpStateSelector,
  signUpErrorSelector,
  (isProcessing, error) => ({ isProcessing, error }),
);
