import jwt from 'jsonwebtoken';

import config from '../../../app/config';

export default class TokenService {
  static async create(payload, options = {}) {
    const defaultOptions = {
      expiresIn: '1h',
    };

    const token = jwt.sign(payload, config.jwt, {
      ...defaultOptions,
      ...options,
    });

    return Promise.resolve(token);
  }

  static async verify(token) {
    return new Promise((resolve, reject) => {
      try {
      } catch (error) {}
    });
  }
}
