// @flow

export interface NotificationEngineInterface {
  ENGINE_NAME: string,
  start(): void;
  notify(): void;
}
