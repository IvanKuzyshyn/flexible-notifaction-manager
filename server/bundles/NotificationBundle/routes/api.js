import express from 'express';
import Response from '../../CoreBundle/services/Response';

import Notification from '../models/Notification';

const router = express.Router();

export default function() {
  router.get('/api/notifications', async (req, res, next) => {
    try {
      const notifications = await Notification.find({})
        .select('message engine notifyAt updatedAt')
        .exec();

      Response.sendOk(res, {
        result: notifications,
      });
    } catch (error) {
      Response.sendServerError(res, {
        statusDescription:
          e.message || 'Error occurred while loading notifications',
      });
    }
  });

  return router;
}
