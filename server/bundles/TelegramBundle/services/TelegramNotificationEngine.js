// @flow
import TelegramBot from 'node-telegram-bot-api';
import type { NotificationEngineInterface } from '../../NotificationBundle/interfaces/NotificationEngineInterface'

class TelegramNotificationEngine implements NotificationEngineInterface {
  _bot: TelegramBot;

  static commands = {
    new: 'newnotification',
    list: 'notificationslist',
  };

  start(): void {
    console.log('BBB', this._bot);
    this._setEventHandlers();
  }

  notify(): void {

  }

  set bot(bot: TelegramBot): void {
    this._bot = bot;
  }

  _setEventHandlers(): void {
    this._bot.on('message', (message, match) => {
      const { chat: { id } } = message;

      this._bot.sendMessage(id, 'Test messaging!');
    });

    this._bot.onText(/\/newnotification/, (message, [source, match]) => {
      const { chat: { id } } = message;

      this._bot.sendMessage(id, 'New notification!');
    });

    this._bot.onText(/\/notificationslist/, (message, [source, match]) => {
      const { chat: { id } } = message;

      this._bot.sendMessage(id, 'Notifications list!');
    });
  }
}

export default new TelegramNotificationEngine();
