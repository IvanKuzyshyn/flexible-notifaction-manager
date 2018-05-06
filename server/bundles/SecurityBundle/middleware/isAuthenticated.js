import jwt from 'jsonwebtoken';

import Response from '../../CoreBundle/services/Response';
import config from "../../../app/config";

export default function (req, res, next) {
  try {
    const { authentication } = req.headers;

    jwt.verify(authentication, config.jwt);
    next();
  } catch (error) {
    Response.sendInvalidUserCredentials(res, {
      statusDescription: 'Token are invalid or has been expired',
    });
  }
}
