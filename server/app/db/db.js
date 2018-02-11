import mongoose from 'mongoose';

import { connectUrl } from '../config/db.config';

export function connectDb() {
  mongoose.Promise = global.Promise;

  mongoose.connect(connectUrl);

  return mongoose.connection;
}
