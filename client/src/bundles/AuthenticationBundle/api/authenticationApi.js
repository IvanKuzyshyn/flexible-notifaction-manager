import HTTP from '../../../services/HTTP';

export const apiRegisterUser = userData =>
  HTTP({ url: '/sign-up', method: 'post', data: userData });
