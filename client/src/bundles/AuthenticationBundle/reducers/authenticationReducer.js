const initialState = {
  authenticating: false,
  authenticatingError: null,
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
export const USER_SIGN_IN = '@@AuthenticationBundle/authentication/USER_SIGN_IN';
export const USER_SIGN_IN_SUCCESS = '@@AuthenticationBundle/authentication/USER_SIGN_IN_SUCCESS';
export const USER_SIGN_IN_FAIL = '@@AuthenticationBundle/authentication/USER_SIGN_IN_FAIL';

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

export const userSignUpFailAction = () => ({
  type: USER_SIGN_UP_FAIL,
});

// ------------------------------------
// Action handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [USER_SIGN_UP]: state => ({
    ...state,
    authenticating: true,
  }),
  [USER_SIGN_UP_SUCCESS]: state => ({
    ...state,
    authenticating: false,
  }),
  [USER_SIGN_UP_FAIL]: state => ({
    ...state,
    authenticating: false,
  }),
};

// ------------------------------------
// Reducer
// ------------------------------------
export default function authenticationReducer(state = initialState, action = {}) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
