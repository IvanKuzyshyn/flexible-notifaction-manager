// @flow
import express from 'express';
import Response from '../../CoreBundle/services/Response';
import isAuthenticated from '../../SecurityBundle/middleware/isAuthenticated';

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

const parseWhenTime = (when: string) => {
  const value = Number(when.replace( /\D+/gi, ''));

  if (when.includes('second')) return value * SECOND;
  if (when.includes('minute')) return value * MINUTE;
  if (when.includes('hour')) return value * HOUR;
  if (when.includes('day')) return value * DAY;

  return 0;
};
const router = express.Router();

export default function(engine) {
  router.post('/api/telegram/send', isAuthenticated, async (req, res) => {
    try {
      const { message, when } = req.body;

      if (when) {
        const ms = parseWhenTime(when);

        setTimeout(() => {
          engine.notify(`${message} (was scheduled ${when} ago)`);
        }, ms);
      } else {
        engine.notify(message);
      }

      Response.sendOk(res, { result: { message }});
    } catch (error) {
      Response.sendServerError(res, {
        statusDescription:
          error.message || 'Error occurred while sending message to Telegram',
      });
    }
  });

  return router;
}
