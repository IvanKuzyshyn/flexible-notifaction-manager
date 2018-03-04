import bcrypt from 'bcrypt-nodejs';

export const createHash = data =>
  bcrypt.hashSync(data, bcrypt.genSalt(10), null);
