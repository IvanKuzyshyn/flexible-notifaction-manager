import HTTP from '../../../services/HTTP';

export const userSignUpAPI = data =>
  HTTP({ url: '/sign-up', method: 'post', data });

export const userSignInAPI = data =>
  HTTP({ url: '/sign-in', method: 'post', data });
