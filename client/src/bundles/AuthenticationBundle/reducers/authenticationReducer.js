const initialState = {
  isSigningIn: false,
  isSigningUp: false,
  signingInError: null,
  signingUpError: null,
};

// ------------------------------------
// Action types
// ------------------------------------
export const USER_SIGN_UP =
  '@@AuthenticationBundle/authentication/USER_SIGN_UP';
export const USER_SIGN_UP_SUCCESS =
  '@@AuthenticationBundle/authentication/USER_SIGN_UP_SUCCESS';
export const USER_SIGN_UP_FAIL =
  '@@AuthenticationBundle/authentication/USER_SIGN_UP_FAIL';
export const USER_SIGN_IN =
  '@@AuthenticationBundle/authentication/USER_SIGN_IN';
export const USER_SIGN_IN_SUCCESS =
  '@@AuthenticationBundle/authentication/USER_SIGN_IN_SUCCESS';
export const USER_SIGN_IN_FAIL =
  '@@AuthenticationBundle/authentication/USER_SIGN_IN_FAIL';

// ------------------------------------
// Action creators
// ------------------------------------
export const userSignUpAction = formData => ({
  type: USER_SIGN_UP,
  payload: { formData },
});

export const userSignUpSuccessAction = () => ({
  type: USER_SIGN_UP_SUCCESS,
});

export const userSignUpFailAction = error => ({
  type: USER_SIGN_UP_FAIL,
  error,
});

export const userSignInAction = formData => ({
  type: USER_SIGN_IN,
  payload: { formData },
});

export const userSignInSuccessAction = () => ({
  type: USER_SIGN_IN_SUCCESS,
});

export const userSignInFailAction = error => ({
  type: USER_SIGN_IN_FAIL,
  error,
});

// ------------------------------------
// Action handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [USER_SIGN_UP]: state => ({
    ...state,
    isSigningUp: true,
    signingUpError: null,
  }),
  [USER_SIGN_UP_SUCCESS]: state => ({
    ...state,
    isSigningUp: false,
    signingUpError: null,
  }),
  [USER_SIGN_UP_FAIL]: (state, action) => ({
    ...state,
    isSigningUp: false,
    signingUpError: action.error,
  }),
  [USER_SIGN_IN]: state => ({
    ...state,
    isSigningIn: true,
    signingInError: null,
  }),
  [USER_SIGN_IN_SUCCESS]: state => ({
    ...state,
    isSigningIn: false,
    signingInError: null,
  }),
  [USER_SIGN_IN_FAIL]: (state, action) => ({
    ...state,
    isSigningIn: false,
    signingInError: action.error,
  }),
};

// ------------------------------------
// Reducer
// ------------------------------------
export default function authenticationReducer(
  state = initialState,
  action = {},
) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
