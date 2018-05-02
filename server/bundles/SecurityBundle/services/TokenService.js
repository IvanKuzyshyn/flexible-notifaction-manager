import jwt from 'jsonwebtoken';

import { JWT_KEY } from '../../../app/config/server.config';

export default class TokenService {
  static async create(payload, options = {}) {
    const defaultOptions = {
      expiresIn: '1h',
    };

    const token = jwt.sign(payload, JWT_KEY, { ...defaultOptions, ...options });

    return Promise.resolve(token);
  }

  static async verify(token) {
    return new Promise((resolve, reject) => {
      try {
      } catch (error) {}
    });
  }
}
