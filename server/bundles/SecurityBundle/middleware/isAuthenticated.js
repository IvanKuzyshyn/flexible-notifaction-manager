import jwt from 'jsonwebtoken';

import Response from '../../CoreBundle/services/Response';
import { JWT_KEY } from "../../../app/config/server.config";

export default function (req, res, next) {
  try {
    const { authentication } = req.headers;

    jwt.verify(authentication, JWT_KEY);
    next();
  } catch (error) {
    Response.sendInvalidUserCredentials(res, {
      statusDescription: 'Token are invalid or has been expired',
    });
  }
}
