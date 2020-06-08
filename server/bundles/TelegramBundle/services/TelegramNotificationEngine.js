// @flow
import TelegramBot from 'node-telegram-bot-api';
import type { NotificationEngineInterface } from '../../NotificationBundle/interfaces/NotificationEngineInterface';

class TelegramNotificationEngine implements NotificationEngineInterface {
  _bot: TelegramBot;
  _channelId: number | string | null;

  static commands = {
    new: 'newnotification',
    list: 'notificationslist',
    start: 'start',
    stop: 'stop',
  };

  ENGINE_NAME = 'telegram';

  start(): void {
    this._setEventHandlers();
  }

  notify(message: string): void {
    if (this._channelId) {
      this._bot.sendMessage(this._channelId, message);
    }
  }

  set bot(bot: TelegramBot): void {
    this._channelId = null;
    this._bot = bot;
  }

  _setEventHandlers(): void {
    this._bot.onText(new RegExp(`/${TelegramNotificationEngine.commands.start}`), (message) => {
      const { chat: { id } } = message;
      this._channelId = id;

      this._bot.sendMessage(id, 'Your Personal Notifier started! Enjoy!');
    });

    this._bot.onText(new RegExp(`/${TelegramNotificationEngine.commands.stop}`), (message) => {
      const { chat: { id } } = message;
      this._channelId = null;

      this._bot.sendMessage(id, 'Your Personal Notifier stopped! See ya soon!');
    });

    // this._bot.onText(
    //   new RegExp(`/${TelegramNotificationEngine.commands.list}`),
    //   (message, [source, match]) => {
    //     const { chat: { id } } = message;
    //
    //     this._bot.sendMessage(id, 'List: to be implemented!');
    //   },
    // );
    //
    // this._bot.onText(
    //   new RegExp(`/${TelegramNotificationEngine.commands.new} (.+)`),
    //   async (message, [, match]) => {
    //     const { chat: { id } } = message;
    //     const notification = new Notification({
    //       message: match,
    //       engine: this.ENGINE_NAME,
    //       notifyAt: new Date('Tue May 18 2018 13:56:58 GMT+0300 (EEST)'), // Just only for test,
    //       sender: {
    //         chatId: id,
    //       },
    //     });
    //     await notification.save();
    //
    //     this._bot.sendMessage(
    //       id,
    //       'Your remind message was saved! You will be reminded at time.',
    //     );
    //   },
    // );
  }
}

export default new TelegramNotificationEngine();
