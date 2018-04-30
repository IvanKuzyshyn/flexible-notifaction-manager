import HTTP from '../../../services/HTTP';

export const userSignUpAPI = userData =>
  HTTP({ url: '/sign-up', method: 'post', data: userData });

export const userSignInAPI = userData =>
  HTTP({ url: '/sign-in', method: 'post', data: userData });
