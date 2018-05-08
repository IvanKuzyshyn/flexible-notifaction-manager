// @flow
import type { BundleInterface } from '../../app/builder';
import initNotificationApiRoutes from './routes/api';

class NotificationBundle implements BundleInterface {
  construct(app: Object): void {
    app.use('/', initNotificationApiRoutes());
  }
}

export default new NotificationBundle();
