// @flow
import config from '../../app/config';
import type { BundleInterface } from '../../app/builder';
import BotFactory from './services/TelegramBotFactory';
import Engine from './services/TelegramNotificationEngine';

import initTelegramApiRouters from './routes/api'

class TelegramBundle implements BundleInterface {
  construct(app: Object): void {
    const factory = new BotFactory({
      token: config.engines.telegram.token,
      polling: true,
    });

    Engine.bot = factory.create();
    Engine.start();

    app.use('/', initTelegramApiRouters(Engine));
  }
}

export default new TelegramBundle();
