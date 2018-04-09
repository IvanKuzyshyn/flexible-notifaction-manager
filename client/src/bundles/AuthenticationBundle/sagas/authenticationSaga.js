import { takeLatest, all, call, put } from 'redux-saga/effects';

import {
  USER_SIGN_UP,
  USER_SIGN_IN,
  userSignUpSuccessAction,
  userSignUpFailAction,
} from '../reducers/authenticationReducer';
import { apiRegisterUser } from '../api/authenticationApi';

// const fetchSignInAction = function*() {
//
// };

const fetchSignUpAction = function*(action) {
  try {
    const { formData } = action.payload;

    const newUser = yield call(apiRegisterUser, formData);
    yield put(userSignUpSuccessAction());
  } catch (error) {
    yield put(userSignUpFailAction());
  }
};

export default function*() {
  yield all([takeLatest(USER_SIGN_UP, fetchSignUpAction)]);
}
