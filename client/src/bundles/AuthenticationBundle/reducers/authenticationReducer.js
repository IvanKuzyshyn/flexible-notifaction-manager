const initialState = {
  registering: false,
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

// ------------------------------------
// Action creators
// ------------------------------------
export const registerUserAction = formData => ({
  type: USER_SIGN_UP,
  payload: { formData },
});

export const registerUserSuccessAction = () => ({
  type: USER_SIGN_UP_SUCCESS,
});

export const registerUserFailAction = () => ({
  type: USER_SIGN_UP_FAIL,
});

// ------------------------------------
// Action handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [USER_SIGN_UP]: state => ({
    ...state,
    registering: true,
  }),
  [USER_SIGN_UP_SUCCESS]: state => ({
    ...state,
    registering: false,
  }),
  [USER_SIGN_UP_FAIL]: state => ({
    ...state,
    registering: false,
  }),
};

// ------------------------------------
// Reducer
// ------------------------------------
export default function authenticationReducer(state = initialState, action = {}) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
