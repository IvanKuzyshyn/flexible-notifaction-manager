// @flow
import TelegramBot from 'node-telegram-bot-api';

import config from '../../app/config';
import type { BundleInterface } from '../../app/builder';
import BotFactory from './services/TelegramBotFactory';
import Engine from './services/TelegramNotificationEngine';

class TelegramBundle implements BundleInterface {
  construct(): void {
    const factory = new BotFactory({
      token: config.engines.telegram.token,
      polling: true,
    });

    Engine.bot = factory.create();
    Engine.start();
  }
}

export default new TelegramBundle();
