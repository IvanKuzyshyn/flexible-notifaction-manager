import mongoose from 'mongoose';

import config from '../config'

export function connectDb() {
  mongoose.Promise = global.Promise;

  mongoose.connect(config.db.connection);

  return mongoose.connection;
}
