const initialState = {};

// ------------------------------------
// Action types
// ------------------------------------
export const SET_USER = '@@UserBundle/user/SET_USER';
export const UNSET_USER = '@@UserBundle/user/UNSET_USER';

// ------------------------------------
// Action creators
// ------------------------------------
export const setUserAction = user => ({
  type: SET_USER,
  payload: { user },
});

export const unsetUserAction = () => ({
  type: UNSET_USER,
});

// ------------------------------------
// Action handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SET_USER]: (state, action) => ({
    ...action.payload.user,
  }),
  [UNSET_USER]: () => ({}),
};

// ------------------------------------
// Reducer
// ------------------------------------
export default function userReducer(state = initialState, action = {}) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
