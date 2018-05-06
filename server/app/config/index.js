import rc from 'rc';

const APP_NAME = 'NOTIFICATION_MANAGER';

export default rc(APP_NAME, {
  port: 3001,
  jwt: 'notifications_auth_secret',
  db: {
    connection: 'mongodb://localhost:27017/notifications',
  },
});
