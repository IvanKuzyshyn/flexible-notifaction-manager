import bcrypt from 'bcrypt-nodejs';

export const compare = (dataToCheck, encryptedData) =>
  new Promise((resolve, reject) => {
    bcrypt.compare(dataToCheck, encryptedData, (error, result) => {
      if (error) return reject(error);

      return resolve(result);
    });
  });
