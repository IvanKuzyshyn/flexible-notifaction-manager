// @flow
import TelegramBot from 'node-telegram-bot-api';

export type TelegramBotConfigType = {
  token: string,
  polling?: boolean,
};

export default class TelegramBotFactory {
  _token: string;
  _config: { [property: string]: any };

  constructor(config: TelegramBotConfigType) {
    const { token, ...restConfig } = config;

    if (!token) {
      throw new Error('Undefined Telegram token');
    }

    this._token = token;
    this._config = restConfig;
  }

  create(): TelegramBot {
    return new TelegramBot(this._token, this._config);
  }
}
