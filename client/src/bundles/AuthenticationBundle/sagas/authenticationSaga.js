import { takeLatest, all, call, put } from 'redux-saga/effects';

import {
  USER_SIGN_UP,
  registerUserSuccessAction,
  registerUserFailAction,
} from '../reducers/authenticationReducer';
import { apiRegisterUser } from '../api/authenticationApi';

// const fetchSignInAction = function*() {
//
// };

const fetchRegisterAction = function*(action) {
  try {
    const { formData } = action.payload;

    const newUser = yield call(apiRegisterUser, formData);
    yield put(registerUserSuccessAction());
  } catch (error) {
    yield put(registerUserFailAction());
  }
};

export default function*() {
  yield all([takeLatest(USER_SIGN_UP, fetchRegisterAction)]);
}
