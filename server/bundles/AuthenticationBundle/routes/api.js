import express from 'express';
import Response, { ServerResponse } from '../../CoreBundle/services/Response';

const router = express.Router();

export default function(passport) {
  router.post('/api/sign-up', (req, res, next) => {
    passport.authenticate('sign-up', (error, user, info) => {
      try {
        if (error) {
          Response.sendServerError(res, {
            statusDescription: error.message,
          });

          return;
        }

        if (!user) {
          Response.sendInvalidRequest(res, {
            statusDescription: info.message,
          });

          return;
        }

        Response.sendOk(res, {
          result: {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
          },
        });
      } catch (e) {
        Response.sendServerError(res, {
          statusDescription:
            e.message || 'Some troubles occurred while signing up',
        });
      }
    })(req, res, next);
  });

  router.post('/api/sign-in', (req, res, next) => {
    passport.authenticate('sign-in', (error, user, info) => {
      if (error) {
        Response.sendServerError(res, {
          statusDescription: error.message,
        });

        return;
      }

      try {
        console.log(res.body);

        if (!user) {
          Response.sendInvalidRequest(res, {
            statusDescription: info.message,
          });

          return;
        }

        Response.sendOk(res, {
          result: {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
          },
        });
      } catch (e) {
        Response.sendInvalidRequest(res, {
          statusDescription:
            e.message || 'Some troubles occurred while signing in',
        });
      }
    })(req, res, next);
  });

  return router;
}
