import jwt from 'jsonwebtoken';

import Response from '../../CoreBundle/services/Response';
import config from '../../../app/config';
import User from '../../UserBundle/models/User';

export default async function(req, res, next) {
  try {
    const { authorization } = req.headers;
    const user = await User.findOne({ token: authorization }).exec();

    if(!user) {
      throw new Error('Invalid token');
    }

    jwt.verify(authorization, config.jwt);
    next();
  } catch (error) {
    Response.sendInvalidUserCredentials(res, {
      statusDescription: 'Token are invalid or has been expired',
    });
  }
}
