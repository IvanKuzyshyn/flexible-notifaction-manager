// @flow
import TelegramBot from 'node-telegram-bot-api';
import type { NotificationEngineInterface } from '../../NotificationBundle/interfaces/NotificationEngineInterface';
import Notification from '../../NotificationBundle/models/Notification';

class TelegramNotificationEngine implements NotificationEngineInterface {
  _bot: TelegramBot;

  static commands = {
    new: 'newnotification',
    list: 'notificationslist',
  };

  ENGINE_NAME = 'telegram';

  start(): void {
    this._setEventHandlers();
  }

  notify(): void {}

  set bot(bot: TelegramBot): void {
    this._bot = bot;
  }

  _setEventHandlers(): void {
    this._bot.on('message', (message, match) => {
      const { chat: { id } } = message;

      this._bot.sendMessage(id, 'Test messaging!');
    });

    this._bot.onText(
      new RegExp(`/${TelegramNotificationEngine.commands.list}`),
      (message, [source, match]) => {
        const { chat: { id } } = message;

        this._bot.sendMessage(id, 'List: to be implemented!');
      },
    );

    this._bot.onText(
      new RegExp(`/${TelegramNotificationEngine.commands.new} (.+)`),
      async (message, [, match]) => {
        const { chat: { id } } = message;
        const notification = new Notification({
          message: match,
          engine: this.ENGINE_NAME,
          notifyAt: new Date('Tue May 18 2018 13:56:58 GMT+0300 (EEST)'), // Just only for test,
          sender: {
            chatId: id,
          },
        });
        await notification.save();

        this._bot.sendMessage(
          id,
          'Your remind message was saved! You will be reminded at time.',
        );
      },
    );
  }
}

export default new TelegramNotificationEngine();
